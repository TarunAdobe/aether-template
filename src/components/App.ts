import { LitElement, html, css } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { consume } from "@lit/context";
import "@spectrum-web-components/theme/sp-theme.js";
import "@spectrum-web-components/theme/src/spectrum-two/themes.js";
import "@uec-labs/sidenav/ue-sidenav.js";
import "@uec-labs/sidenav/ue-sidenav-item.js";
import "@uec-labs/sidenav/ue-sidenav-create-button.js";
import "@unified-experience-components/header/ue-header-container.js";
import "@unified-experience-components/account-menu/ue-account-menu.js";
import "@unified-experience-components/account-menu/ue-account-popover.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-home.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-app.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-cloud.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-contrast.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-folder.js";
import "@spectrum-web-components/bundle/elements.js";
import { IMSContext } from "../contexts/IMSContext.js";
import type { Ims } from "../utils/IMS.js";
import "./HomeContent.js";
import "./MyContent.js";

const Dog =
  "data:image/jpeg;base64,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";

@customElement("app-root")
export class App extends LitElement {
  @state()
  private colorMode: "light" | "dark" = "light";

  @state()
  private currentRoute: string = "home";

  @consume({ context: IMSContext, subscribe: true })
  @property({ attribute: false })
  ims: Ims | null = null;

  static override styles = css`
    :host {
      display: flex;
      background-color: var(--spectrum-global-color-gray-100);
    }

    .root {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }

    .main-area {
      display: flex;
      flex: 1;
      background-color: var(--spectrum-global-color-gray-100);
      overflow: hidden;
      min-height: 0;
    }

    .content {
      border-top-left-radius: var(--spectrum-global-dimension-size-100);
      flex: 1;
      min-width: 0;
      padding: 32px;
      background-color: white;
      overflow-x: hidden;
      overflow-y: auto;
    }

    ue-sidenav {
      height: 100%;
      flex-shrink: 0;
    }
  `;

  private hashChangeHandler = () => this.updateRouteFromHash();

  override connectedCallback(): void {
    super.connectedCallback();
    // Load color mode preference from localStorage or system preference
    const stored = localStorage.getItem("colorMode");
    if (stored === "dark" || stored === "light") {
      this.colorMode = stored;
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      this.colorMode = prefersDark ? "dark" : "light";
    }

    this.updateRouteFromHash();
    window.addEventListener("hashchange", this.hashChangeHandler);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    window.removeEventListener("hashchange", this.hashChangeHandler);
  }

  private updateRouteFromHash(): void {
    const hash = window.location.hash.slice(1) || "home";
    this.currentRoute = hash;
  }

  private toggleColorMode(): void {
    this.colorMode = this.colorMode === "light" ? "dark" : "light";
    localStorage.setItem("colorMode", this.colorMode);
  }

  private handleSignIn(): void {
    this.ims?.adobeIMS?.signIn();
  }

  private handleLogout = (): void => {
    this.ims?.logout();
  };

  private renderRouteContent() {
    switch (this.currentRoute) {
      case "my-content":
        return html`<my-content></my-content>`;
      case "home":
      default:
        return html`<home-content></home-content>`;
    }
  }

  override render() {
    const isSignedIn = !!this.ims?.tokenData?.token;
    const profile = this.ims?.profileData;

    return html`
      <sp-theme color=${this.colorMode} scale="medium" system="spectrum-two">
        <div class="root">
          <ue-header-container
            style=${`--ue-header-min-height-desktop: 56px; ${
              this.colorMode === "dark"
                ? "background: var(--spectrum-background-layer-1-color)"
                : ""
            }`}
            ?isSignedIn=${isSignedIn}
          >
            <sp-icon-app size="xxl" slot="brand" label="logo"></sp-icon-app>
            <span
              slot="doc-meta"
              style="margin-bottom: 6px; margin-right: 6px; display: flex; align-items: center; gap: 6px;"
            >
              <sp-icon-cloud slot="icon"></sp-icon-cloud>
              <p>Creative Studio</p>
            </span>
            <sp-action-button
              quiet
              slot="utilities"
              label=${this.colorMode === "light"
                ? "Switch to dark color mode"
                : "Switch to light color mode"}
              @click=${this.toggleColorMode}
            >
              <sp-icon-contrast slot="icon" size="s"></sp-icon-contrast>
            </sp-action-button>
            <ue-account-menu
              slot="account-menu"
              @ue-sign-in=${this.handleSignIn}
            >
              ${isSignedIn && profile
                ? html`
                    <ue-account-popover
                      username=${profile.displayName || profile.name || "User"}
                      email=${profile.email || ""}
                      avatar=${Dog}
                      org="Spectrum Design System"
                      manage="https://account.adobe.com"
                      local-label="Quick Links"
                      @ue-sign-out=${this.handleLogout}
                    >
                      <sp-menu-item slot="local" @click=${() => {}}>
                        Custom link 1
                      </sp-menu-item>

                      <sp-menu-item slot="legal" @click=${() => {}}>
                        Privacy
                      </sp-menu-item>
                    </ue-account-popover>
                  `
                : html``}
            </ue-account-menu>
          </ue-header-container>
          <div
            class="main-area"
            style=${this.colorMode === "dark" &&
            "background: var(--spectrum-background-layer-1-color)"}
          >
            <ue-sidenav active-id=${this.currentRoute}>
              <ue-sidenav-create-button
                slot="create-button"
                accessible-label="Create"
              >
                New File
              </ue-sidenav-create-button>
              <ue-sidenav-item id="home" label="Home" href="#home">
                <sp-icon-home slot="icon"></sp-icon-home>
              </ue-sidenav-item>
              <ue-sidenav-item
                id="my-content"
                label="My Content"
                href="#my-content"
              >
                <sp-icon-folder slot="icon"></sp-icon-folder>
              </ue-sidenav-item>
            </ue-sidenav>
            <div
              class="content"
              style=${this.colorMode === "dark" && "background: #181818"}
            >
              ${this.renderRouteContent()}
            </div>
          </div>
        </div>
      </sp-theme>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-root": App;
  }
}
