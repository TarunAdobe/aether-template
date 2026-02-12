import { LitElement, html, css } from "lit";
import { customElement } from "lit/decorators.js";
import "@spectrum-web-components/bundle/elements.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-add.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-upload.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-image.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-edit.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-folder-add.js";
import typography from "../styles/typography.css.js";

/**
 * Home Content Component
 * ======================
 *
 * This component displays the home page content.
 * Edit this file to customize your home page.
 */
@customElement("home-content")
export class HomeContent extends LitElement {
  static override styles = [
    typography,
    css`
      .hero-section {
        margin-bottom: 32px;
      }

      .hero-content {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 32px;
        gap: 32px;
      }

      .hero-text {
        flex: 1;
      }

      .hero-text h1 {
        margin-bottom: 12px;
        font-size: 32px;
      }

      .hero-text p {
        font-size: 16px;
        color: var(--spectrum-neutral-subdued-content-color-default);
      }

      .hero-actions {
        display: flex;
        gap: 12px;
      }

      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0 20px 0;
      }

      .section-title {
        font-size: 22px;
        font-weight: 600;
        margin: 0;
        color: var(--spectrum-neutral-content-color-default);
      }

      .quick-actions {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
        margin-bottom: 48px;
      }

      .action-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 20px;
        background: var(--spectrum-background-layer-2-color);
        border-radius: 8px;
        border: 1px solid var(--spectrum-gray-300);
      }

      .action-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--spectrum-global-color-blue-600);
        border-radius: 8px;
      }

      .action-content {
        flex: 1;
      }

      .action-title {
        font-weight: 600;
        margin-bottom: 4px;
        color: var(--spectrum-neutral-content-color-default);
      }

      .action-description {
        font-size: 13px;
        color: var(--spectrum-neutral-subdued-content-color-default);
      }

      .recent-files {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 20px;
        margin-bottom: 32px;
      }

      .file-item {
        display: flex;
        flex-direction: column;
        gap: 8px;
        cursor: pointer;
      }

      .file-thumbnail {
        width: 100%;
        aspect-ratio: 1;
        background: var(--spectrum-background-layer-2-color);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        border: 1px solid var(--spectrum-gray-300);
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .file-item:hover .file-thumbnail {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .file-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .file-icon {
        font-size: 48px;
      }

      .file-info {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .file-name {
        font-size: 13px;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: var(--spectrum-neutral-content-color-default);
      }

      .file-meta {
        font-size: 11px;
        color: var(--spectrum-neutral-subdued-content-color-default);
      }

      .stats-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        margin-bottom: 32px;
      }

      .stat-box {
        padding: 20px;
        background: var(--spectrum-background-layer-2-color);
        border-radius: 8px;
        border: 1px solid var(--spectrum-gray-300);
      }

      .stat-value {
        font-size: 28px;
        font-weight: 700;
        color: var(--spectrum-global-color-blue-600);
        margin-bottom: 4px;
      }

      .stat-label {
        font-size: 13px;
        color: var(--spectrum-neutral-subdued-content-color-default);
        font-weight: 500;
      }
    `,
  ];

  override render() {
    return html`
      <div class="hero-section">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Creative Studio</h1>
            <p>Your workspace for creating and managing visual content</p>
          </div>
          <div class="hero-actions">
            <sp-button variant="accent" size="l">
              <sp-icon-add slot="icon"></sp-icon-add>
              New Project
            </sp-button>
            <sp-button variant="secondary" size="l">
              <sp-icon-upload slot="icon"></sp-icon-upload>
              Import
            </sp-button>
          </div>
        </div>

        <div class="stats-row">
          <div class="stat-box">
            <div class="stat-value">156</div>
            <div class="stat-label">Total Files</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">24</div>
            <div class="stat-label">Projects</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">89</div>
            <div class="stat-label">Edited Today</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">12.4 GB</div>
            <div class="stat-label">Storage Used</div>
          </div>
        </div>
      </div>

      <sp-divider size="m"></sp-divider>

      <div class="section-header">
        <h2 class="section-title">Quick Actions</h2>
      </div>

      <div class="quick-actions">
        <div class="action-item">
          <div class="action-icon">
            <sp-icon-image size="l" style="color: white;"></sp-icon-image>
          </div>
          <div class="action-content">
            <div class="action-title">Generate Image</div>
            <div class="action-description">Create with AI</div>
          </div>
          <sp-button variant="primary" treatment="outline" size="s">Start</sp-button>
        </div>

        <div class="action-item">
          <div class="action-icon" style="background: var(--spectrum-global-color-magenta-600);">
            <sp-icon-edit size="l" style="color: white;"></sp-icon-edit>
          </div>
          <div class="action-content">
            <div class="action-title">Photo Editor</div>
            <div class="action-description">Edit and enhance</div>
          </div>
          <sp-button variant="primary" treatment="outline" size="s">Open</sp-button>
        </div>

        <div class="action-item">
          <div class="action-icon" style="background: var(--spectrum-global-color-seafoam-600);">
            <sp-icon-folder-add size="l" style="color: white;"></sp-icon-folder-add>
          </div>
          <div class="action-content">
            <div class="action-title">New Project</div>
            <div class="action-description">Start fresh</div>
          </div>
          <sp-button variant="primary" treatment="outline" size="s">Create</sp-button>
        </div>
      </div>

      <sp-divider size="m"></sp-divider>

      <div class="section-header">
        <h2 class="section-title">Recent Files</h2>
        <sp-link href="#my-content">View all</sp-link>
      </div>

      <div class="recent-files">
        ${this.renderFile("IMG_2043.png", "PNG", "4.2 MB")}
        ${this.renderFile("beach_sunset.jpg", "JPEG", "3.8 MB")}
        ${this.renderFile("mountain_photo.jpg", "JPEG", "5.1 MB")}
        ${this.renderFile("ocean_view.png", "PNG", "4.7 MB")}
        ${this.renderFile("city_night.jpg", "JPEG", "6.2 MB")}
        ${this.renderFile("forest.jpg", "JPEG", "4.9 MB")}
        ${this.renderFile("flowers.png", "PNG", "3.5 MB")}
        ${this.renderFile("desert.jpg", "JPEG", "5.8 MB")}
      </div>
    `;
  }

  private renderFile(name: string, type: string, size: string) {
    return html`
      <div class="file-item">
        <div class="file-thumbnail">
          <sp-icon-image size="xxl" style="color: var(--spectrum-global-color-gray-500);"></sp-icon-image>
        </div>
        <div class="file-info">
          <div class="file-name">${name}</div>
          <div class="file-meta">${type} • ${size}</div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "home-content": HomeContent;
  }
}
