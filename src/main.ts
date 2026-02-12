import "./components/App.js";
import "./contexts/IMSProvider.js";
import "./index.css";
import "@spectrum-web-components/styles";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-wrapper")
export class AppWrapper extends LitElement {
  override render() {
    return html`<ims-provider>
      <app-root></app-root>
    </ims-provider>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-wrapper": AppWrapper;
  }
}
