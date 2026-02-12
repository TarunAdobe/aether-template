import { AdobeIMS } from "@identity/imslib";
import { type IAdobeIdData } from "@identity/imslib/adobe-id/IAdobeIdData";
import { IEnvironment } from "@identity/imslib/adobe-id/IEnvironment";
import { type ITokenInformation } from "@identity/imslib/adobe-id/custom-types/CustomTypes";
import { IErrorType } from "@identity/imslib/adobe-id/IErrorType";
import { v4 } from "uuid";

declare global {
  interface Window {
    adobeIMSAuthToken: string;
  }
}

export interface AdobeIMSProfile {
  account_type: string;
  authId: string;
  countryCode: string;
  displayName: string;
  email: string;
  emailVerified: string;
  first_name: string;
  last_name: string;
  mktPerm: string;
  mrktPermEmail?: string;
  name: string;
  phoneNumber?: string;
  preferred_languages?: string;
  userId: string;
  utcOffset?: string;
}

export interface Ims {
  tokenData?: ITokenInformation;
  profileData?: AdobeIMSProfile;
  ready: Promise<void>;
  logout: () => void;
  adobeIMS: AdobeIMS;
  notifyUpdate?: () => void;
}

// I copied this from the plain-react template
export class ImsClass implements Ims {
  testClientId = "AdobeSenseiPredictServiceStageKey";

  // old debug settings, leaving them just in case i need them later
  useTokenOverride = false;
  tokenOverrideValue = "";

  // new session ID for each time the app is used
  sessionId = v4();

  // the actual IMS settings
  adobeIMS: AdobeIMS;
  adobeid: IAdobeIdData = {
    client_id: import.meta.env.VITE_IMS_CLIENT_ID,
    scope: import.meta.env.VITE_IMS_SCOPE,
    environment: import.meta.env.VITE_IMS_ENV as IEnvironment,
    locale: "en_US",
    useLocalStorage: true,
    autoValidateToken: true,
    onAccessToken: this.onAccessToken.bind(this),
    onReauthAccessToken: this.onReauthAccessToken.bind(this),
    onError: this.onImsError.bind(this),
    onAccessTokenHasExpired: this.onAccessTokenHasExpired.bind(this),
    onReady: this.onReady.bind(this),
  };

  tokenData?: ITokenInformation = undefined;
  profileData?: AdobeIMSProfile = undefined;

  // Callbacks to notify when IMS state changes (support multiple listeners)
  private updateCallbacks: Set<() => void> = new Set();

  notifyUpdate?: () => void; // Legacy single callback support

  // Promise that resolves when IMS is ready
  private readyResolve?: () => void;
  ready: Promise<void>;

  constructor(settings: Partial<ImsClass> = {}) {
    this.ready = new Promise<void>((resolve) => {
      this.readyResolve = resolve;
    });

    // Apply settings, but preserve the bound callbacks in adobeid
    const { adobeid: customAdobeid, ...otherSettings } = settings;
    Object.assign(this, otherSettings);

    // If custom adobeid settings were provided, merge them but keep bound callbacks
    if (customAdobeid) {
      this.adobeid = {
        ...this.adobeid,
        ...customAdobeid,
        // Always use bound callbacks - these must not be overwritten
        onAccessToken: this.onAccessToken.bind(this),
        onReauthAccessToken: this.onReauthAccessToken.bind(this),
        onError: this.onImsError.bind(this),
        onAccessTokenHasExpired: this.onAccessTokenHasExpired.bind(this),
        onReady: this.onReady.bind(this),
      };
    }

    this.adobeIMS = new AdobeIMS(this.adobeid);
    this.adobeIMS.initialize();
  }

  setTokenData(data?: ITokenInformation) {
    this.tokenData = data;
    window.adobeIMSAuthToken = data?.token ?? "";
  }

  onAccessToken(data: ITokenInformation) {
    this.setTokenData(data);
    this.adobeIMS.getProfile().then((data) => this.setProfileData(data));
    // Trigger update for any listeners
    this.notifyUpdate?.();
    this.updateCallbacks.forEach((cb) => cb());
  }

  onReauthAccessToken(data: ITokenInformation) {
    this.setTokenData(data);
    console.log("reauth", data);
    // Trigger update for any listeners
    this.notifyUpdate?.();
    this.updateCallbacks.forEach((cb) => cb());
  }

  onImsError(type: IErrorType, message: unknown) {
    console.error(type, message);
  }

  onAccessTokenHasExpired() {
    console.log("token expired");
    this.setTokenData(undefined);
    this.notifyUpdate?.();
    this.updateCallbacks.forEach((cb) => cb());
    this.adobeIMS.signIn();
  }

  onReady() {
    console.log("ready");
    // Resolve the ready promise
    if (this.readyResolve) {
      this.readyResolve();
    }
  }

  setProfileData(profileData: unknown) {
    this.profileData = profileData as AdobeIMSProfile;
    console.log(profileData);
    // Trigger update for any listeners
    this.notifyUpdate?.();
    this.updateCallbacks.forEach((cb) => cb());
  }

  logout() {
    this.adobeIMS.signOut();
    this.setTokenData(undefined);
    this.profileData = undefined;
    this.notifyUpdate?.();
    this.updateCallbacks.forEach((cb) => cb());
  }

  // Add/remove update listeners
  addUpdateListener(callback: () => void): () => void {
    this.updateCallbacks.add(callback);
    return () => this.updateCallbacks.delete(callback);
  }
}

// create the global singleton for IMS stuff
export const IMS = new ImsClass();
export default IMS;
