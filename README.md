# Aether Template

A modern web application template built with Spectrum Web Components and Lit, featuring a clean file browser interface inspired by Adobe's design system.

## Features

- 🎨 **Spectrum Design System** - Built with Adobe's Spectrum Web Components
- 🌓 **Dark Mode Support** - Automatic theme switching with semantic color tokens
- 📁 **File Browser UI** - Clean grid and list views for content management
- ⚡ **Fast Development** - Powered by Vite for instant HMR
- 🔒 **Type Safe** - Written in TypeScript
- 🎯 **Adobe IMS Integration** - Ready for Adobe authentication

## Screenshots

### Home Dashboard
A clean dashboard showing quick actions, statistics, and recent files.

### My Content Browser
Grid and list views with folders and file management, including search, sorting, and filtering.

## Tech Stack

- **Framework**: [Lit](https://lit.dev/) - Efficient web components
- **UI Library**: [Spectrum Web Components](https://opensource.adobe.com/spectrum-web-components/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Authentication**: Adobe IMS (Identity Management System)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v22.11.0 or higher (v22.17.0 recommended)
- **pnpm**: v10.17.0 or higher

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/TarunAdobe/aether-template.git
cd aether-template
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory (a template is provided):

```env
VITE_IMS_CLIENT_ID=your_client_id
VITE_IMS_SCOPE=your_scope
VITE_IMS_ENV=stage
```

> **Note**: Contact your Adobe administrator for IMS credentials.

### 4. Start the development server

```bash
pnpm dev
```

The application will be available at **https://localhost:5173**

> **Note**: The dev server uses HTTPS with a self-signed certificate. You may need to accept the certificate warning in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with HMR |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run TypeScript compiler and ESLint |

## Project Structure

```
aether-template/
├── src/
│   ├── components/
│   │   ├── App.ts              # Main application component
│   │   ├── HomeContent.ts      # Home dashboard page
│   │   └── MyContent.ts        # File browser page
│   ├── contexts/
│   │   ├── IMSContext.ts       # IMS context definition
│   │   └── IMSProvider.ts      # IMS authentication provider
│   ├── styles/
│   │   └── typography.css.ts   # Shared typography styles
│   ├── utils/
│   │   └── IMS.ts             # IMS utility functions
│   ├── index.css              # Global styles
│   └── main.ts                # Application entry point
├── public/
│   └── favicon.svg            # Application icon
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # This file
```

## Key Components

### App Component (`src/components/App.ts`)
The main application shell featuring:
- Spectrum theme provider with light/dark mode support
- Unified Experience Components header
- Side navigation with routing
- Account menu integration

### HomeContent Component (`src/components/HomeContent.ts`)
Dashboard interface with:
- Statistics overview
- Quick action cards
- Recent files grid
- File type icons

### MyContent Component (`src/components/MyContent.ts`)
File browser interface featuring:
- Grid and list view toggle
- Search functionality
- Sort and filter options
- Folder and file management
- Hover actions

## Customization

### Adding New Routes

1. Create a new component in `src/components/`
2. Import it in `App.ts`
3. Add a sidenav item with the route
4. Add the route to the `renderRouteContent()` switch statement

Example:

```typescript
// In App.ts
import "./YourNewContent.js";

// Add sidenav item
<ue-sidenav-item id="your-route" label="Your Page" href="#your-route">
  <sp-icon-your-icon slot="icon"></sp-icon-your-icon>
</ue-sidenav-item>

// Add route case
case "your-route":
  return html`<your-new-content></your-new-content>`;
```

### Using Spectrum Components

Import components from the bundle:

```typescript
import "@spectrum-web-components/bundle/elements.js";
```

Import icons individually:

```typescript
import "@spectrum-web-components/icons-workflow/icons/sp-icon-name.js";
```

Use in your templates:

```typescript
html`
  <sp-button variant="accent">
    <sp-icon-add slot="icon"></sp-icon-add>
    Button Text
  </sp-button>
`
```

### Dark Mode

The template uses Spectrum semantic tokens that automatically adapt to light/dark themes. Use these tokens in your styles:

```css
color: var(--spectrum-neutral-content-color-default);
background: var(--spectrum-background-layer-2-color);
border-color: var(--spectrum-gray-300);
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Resources

- [Spectrum Web Components Documentation](https://opensource.adobe.com/spectrum-web-components/)
- [Spectrum Design System](https://spectrum.adobe.com/)
- [Lit Documentation](https://lit.dev/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [Adobe IMS Documentation](https://developer.adobe.com/developer-console/docs/guides/authentication/)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For questions or issues:
- Open an issue on GitHub
- Contact the Adobe development team

---

Built with ❤️ using Adobe Spectrum Web Components
