## Project overview

This is a Vite + Lit + TypeScript example that demonstrates Adobe Spectrum Web Components (SWC) with a complete starter template. It shows how to:

- Use Spectrum Web Components bundle for easy component imports
- Build custom web components with Lit framework
- Integrate Adobe Identity Management System (IMS) for authentication
- Structure a web components application with context providers
- Apply Spectrum modes (light/dark)

The template includes a working IMS integration example that demonstrates authentication flow and profile access.

## Tech stack

- Lit 3 + TypeScript 5
- Vite 6 with TypeScript support
- Spectrum Web Components (`@spectrum-web-components/bundle`)
- Adobe IMS Library (`@identity/imslib`)
- Package manager: pnpm
- Node.js: 22.11.0

## How Spectrum Web Components work

This template uses the Spectrum Web Components bundle, which includes all component elements in a single import. This simplifies dependency management compared to importing individual component packages.

```typescript
// Import all Spectrum Web Components at once
import "@spectrum-web-components/bundle/elements.js";

// Import theme system
import "@spectrum-web-components/theme/theme-light.js";
import "@spectrum-web-components/theme/scale-medium.js";

// Use components directly in templates
html`<sp-button variant="accent">Click me</sp-button>`;
```

Components are registered as custom elements and can be used anywhere in your HTML templates.

## Vite configuration highlights

- HTTPS development server enabled via `vite-plugin-mkcert`
- TypeScript compilation with strict type checking
- Build output configured to `/dist` directory
- Source maps enabled for debugging

```ts
import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig(() => {
  return {
    server: { https: {} },
    plugins: [mkcert()],
    build: {
      sourcemap: true,
      outDir: "./dist",
    },
  };
});
```

## Theming and required CSS

Include the Spectrum Web Components base styles once at the app root:

```typescript
import "@spectrum-web-components/styles";
```

Then apply theme and scale:

```typescript
import "@spectrum-web-components/theme/theme-light.js";
import "@spectrum-web-components/theme/scale-medium.js";
```

Themes can be switched dynamically at runtime, and components will automatically update to reflect the current theme.

## IMS Integration

The template includes a complete IMS (Identity Management System) setup using Lit Context API:

- **IMSProvider**: Web component that provides IMS singleton to the component tree
- **IMSContext**: Lit context for accessing IMS instance
- **IMS utility**: Singleton class handling authentication, tokens, and profile data

Components can access IMS via the context consumer:

```typescript
@consume({ context: IMSContext, subscribe: true })
@property({ attribute: false })
ims!: Ims;
```

## Running and building

From the repository root:

```bash
pnpm install
pnpm dev
```

- Dev server: https://localhost:5173 (HTTPS required for IMS)
- Build: `pnpm build`
- Preview production build: `pnpm preview`

## Project structure

- `index.html` – Vite entry HTML
- `vite.config.ts` – Vite configuration with HTTPS and build settings
- `tsconfig.json` – Strict TypeScript config optimized for bundlers
- `package.json` – Dependencies and scripts (uses pnpm)
- `.npmrc` – NPM registry configuration for Adobe packages
- `src/main.ts` – Application entry point, imports styles and root component
- `src/components/AppRoot.ts` – Root component wrapping IMS provider
- `src/components/AppContent.ts` – Main application UI with IMS integration example
- `src/contexts/IMSProvider.ts` – IMS context provider component
- `src/contexts/IMSContext.ts` – Lit context definition for IMS
- `src/utils/IMS.ts` – IMS singleton class and types
- `src/index.css` – Global application styles

## Environment Variables

Create a `.env` file in the output directory (created when running `npm run dev`) with:

```env
VITE_IMS_CLIENT_ID=your_client_id
VITE_IMS_SCOPE=your_scope
VITE_IMS_ENV=stage
VITE_ADOBE_STOCK_API_KEY=your_api_key
VITE_ADOBE_STOCK_CLIENT_ID=your_stock_client_id
```

These are required for IMS authentication to work properly.

## Creating Custom Components

To create a new web component:

```typescript
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import "@spectrum-web-components/bundle/elements.js";

@customElement("my-component")
export class MyComponent extends LitElement {
  @property({ type: String })
  name = "World";

  static override styles = css`
    :host {
      display: block;
      padding: var(--spectrum-global-dimension-size-400);
    }
  `;

  override render() {
    return html`
      <h2>Hello, ${this.name}!</h2>
      <sp-button variant="accent">Click me</sp-button>
    `;
  }
}
```

## Package Manager

This template uses **pnpm** as specified in `package.json`. The CLI will automatically detect and use pnpm when scaffolding this template.

## Licensing

Several files include an Apache-2.0 license header from Adobe. Refer to individual file headers (and any top-level license file, if added) for the definitive licensing terms.
