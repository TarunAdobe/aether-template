/**
 * IMS AUTHENTICATION PROVIDER
 * ============================
 *
 * Provides the IMS singleton instance through Lit Context.
 * The IMS class handles all authentication logic, token management,
 * and profile data. This provider simply makes it available to the
 * component tree.
 *
 * Waits for IMS to be ready (onReady callback) before rendering children.
 *
 * USAGE:
 * ```ts
 * // Wrap your app
 * <ims-provider>
 *   <app-content></app-content>
 * </ims-provider>
 *
 * // Use in components via the consumer mixin
 * import { consume } from '@lit/context';
 * import { IMSContext } from './contexts/IMSContext.js';
 *
 * @consume({ context: IMSContext, subscribe: true })
 * @property({ attribute: false })
 * ims!: Ims;
 * ```
 */

import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { provide } from "@lit/context";
import { IMSContext } from "./IMSContext.js";
import IMS from "../utils/IMS.js";
import type { Ims } from "../utils/IMS.js";

@customElement("ims-provider")
export class IMSProvider extends LitElement {
  // Create a new object reference when IMS updates to trigger context subscribers
  @provide({ context: IMSContext })
  @property({ attribute: false })
  ims: Ims = IMS;

  private isReady = false;
  private removeUpdateListener?: () => void;

  override connectedCallback(): void {
    super.connectedCallback();

    // When IMS updates, create a new object reference to trigger context subscribers
    const handleUpdate = () => {
      // Create new object that delegates to IMS - this changes the reference
      this.ims = Object.create(IMS);
    };

    if ("addUpdateListener" in IMS) {
      this.removeUpdateListener = (IMS as any).addUpdateListener(handleUpdate);
    } else {
      (IMS as Ims).notifyUpdate = handleUpdate;
    }

    // Wait for IMS to be ready
    IMS.ready.then(() => {
      console.log("IMS ready - rendering app");
      this.isReady = true;
      this.ims = Object.create(IMS); // Trigger initial update
    });
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.removeUpdateListener) {
      this.removeUpdateListener();
    } else {
      IMS.notifyUpdate = undefined;
    }
  }

  override render() {
    if (!this.isReady) {
      return html``;
    }
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ims-provider": IMSProvider;
  }
}
