import { css } from "lit";

/**
 * Typography Styles
 * =================
 *
 * Centralized typography styles using Spectrum design tokens.
 * These styles automatically adapt to light/dark color modes.
 *
 * Usage in components:
 * ```typescript
 * import typography from "../styles/typography.css.js";
 *
 * static override styles = [typography];
 * ```
 */
export default css`
  :host {
    display: block;
  }

  h1 {
    margin: 0;
    font-size: var(--spectrum-heading-size-xl);
    font-weight: var(--spectrum-heading-font-weight-bold);
    line-height: var(--spectrum-heading-line-height-xl);
    color: var(--spectrum-neutral-content-color-default);
  }

  h2 {
    margin: 0 0 var(--spectrum-spacing-200) 0;
    font-size: var(--spectrum-heading-size-l);
    font-weight: var(--spectrum-heading-font-weight-bold);
    line-height: var(--spectrum-heading-line-height-l);
    color: var(--spectrum-neutral-content-color-default);
  }

  h3 {
    margin: 0 0 var(--spectrum-spacing-200) 0;
    font-size: var(--spectrum-heading-size-m);
    font-weight: var(--spectrum-heading-font-weight-bold);
    line-height: var(--spectrum-heading-line-height-m);
    color: var(--spectrum-neutral-content-color-default);
  }

  p {
    margin: 0 0 var(--spectrum-spacing-200) 0;
    font-size: var(--spectrum-font-size-200);
    line-height: var(--spectrum-line-height-200);
    color: var(--spectrum-neutral-content-color-default);
  }

  code {
    font-family: var(--spectrum-font-family-mono);
    background: var(--spectrum-neutral-subdued-background-color-default);
    padding: 2px 6px;
    border-radius: 3px;
    color: var(--spectrum-neutral-content-color-default);
  }
`;
