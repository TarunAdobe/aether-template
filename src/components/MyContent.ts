import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";
import "@spectrum-web-components/bundle/elements.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-view-grid.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-view-list.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-add.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-filter.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-select-box-all.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-folder.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-more.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-image.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-edit.js";
import "@spectrum-web-components/icons-workflow/icons/sp-icon-share.js";
import typography from "../styles/typography.css.js";

/**
 * My Content Component
 * ====================
 *
 * This component displays the "My Content" page.
 * Edit this file to customize your content page.
 */
@customElement("my-content")
export class MyContent extends LitElement {
  @state()
  private viewMode: "grid" | "list" = "grid";

  @state()
  private selectedView: string = "grid";

  static override styles = [
    typography,
    css`
      .content-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;
      }

      .content-title {
        font-size: 28px;
        font-weight: 600;
        margin: 0;
        color: var(--spectrum-neutral-content-color-default);
      }

      .header-actions {
        display: flex;
        gap: 12px;
        align-items: center;
      }

      .toolbar {
        display: flex;
        gap: 12px;
        margin-bottom: 32px;
        flex-wrap: wrap;
        align-items: center;
        padding: 16px;
        background: var(--spectrum-background-layer-2-color);
        border-radius: 8px;
        border: 1px solid var(--spectrum-gray-300);
      }

      .search-wrapper {
        flex: 1;
        min-width: 250px;
      }

      .file-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 24px;
        margin-bottom: 32px;
      }

      .file-item {
        display: flex;
        flex-direction: column;
        gap: 8px;
        cursor: pointer;
        position: relative;
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
        transition: all 0.2s;
      }

      .file-item:hover .file-thumbnail {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        border-color: var(--spectrum-accent-color-900);
      }

      .file-item:hover .file-actions {
        opacity: 1;
      }

      .file-icon {
        color: var(--spectrum-neutral-subdued-content-color-default);
      }

      .file-actions {
        position: absolute;
        top: 8px;
        right: 8px;
        opacity: 0;
        transition: opacity 0.2s;
        z-index: 10;
        display: flex;
        gap: 4px;
      }

      .file-badge {
        position: absolute;
        bottom: 8px;
        left: 8px;
        background: rgba(0, 0, 0, 0.7);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
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

      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 32px 0 20px 0;
      }

      .section-title {
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        color: var(--spectrum-neutral-content-color-default);
      }

      .table-wrapper {
        margin-bottom: 32px;
        border: 1px solid var(--spectrum-gray-300);
        border-radius: 8px;
        overflow: hidden;
      }

      .list-view {
        display: flex;
        flex-direction: column;
        gap: 1px;
        background: var(--spectrum-gray-300);
        border: 1px solid var(--spectrum-gray-300);
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 32px;
      }

      .list-item {
        display: flex;
        align-items: center;
        gap: 16px;
        padding: 12px 16px;
        background: var(--spectrum-background-layer-1-color);
        cursor: pointer;
        transition: background 0.2s;
      }

      .list-item:hover {
        background: var(--spectrum-background-layer-2-color);
      }

      .list-thumbnail {
        width: 48px;
        height: 48px;
        background: var(--spectrum-background-layer-2-color);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        border: 1px solid var(--spectrum-gray-300);
      }

      .list-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
      }

      .list-name {
        font-weight: 500;
        font-size: 14px;
        color: var(--spectrum-neutral-content-color-default);
      }

      .list-meta {
        font-size: 12px;
        color: var(--spectrum-neutral-subdued-content-color-default);
      }

      .list-actions {
        display: flex;
        gap: 8px;
        opacity: 0;
        transition: opacity 0.2s;
      }

      .list-item:hover .list-actions {
        opacity: 1;
      }
    `,
  ];

  override render() {
    return html`
      <div class="content-header">
        <h1 class="content-title">My Content</h1>
        <div class="header-actions">
          <sp-action-group
            selects="single"
            selected=${this.selectedView}
            @change=${this.handleViewChange}
          >
            <sp-action-button value="grid">
              <sp-icon-view-grid slot="icon"></sp-icon-view-grid>
            </sp-action-button>
            <sp-action-button value="list">
              <sp-icon-view-list slot="icon"></sp-icon-view-list>
            </sp-action-button>
          </sp-action-group>
          <sp-button variant="accent">
            <sp-icon-add slot="icon"></sp-icon-add>
            Upload
          </sp-button>
        </div>
      </div>

      <div class="toolbar">
        <div class="search-wrapper">
          <sp-search placeholder="Search files..."></sp-search>
        </div>
        <sp-picker label="Sort" value="recent" size="m">
          <sp-menu-item value="recent">Most Recent</sp-menu-item>
          <sp-menu-item value="oldest">Oldest</sp-menu-item>
          <sp-menu-item value="name">Name</sp-menu-item>
          <sp-menu-item value="size">Size</sp-menu-item>
          <sp-menu-item value="type">Type</sp-menu-item>
        </sp-picker>
        <sp-picker label="Type" value="all" size="m">
          <sp-menu-item value="all">All Files</sp-menu-item>
          <sp-menu-item value="images">Images</sp-menu-item>
          <sp-menu-item value="documents">Documents</sp-menu-item>
          <sp-menu-item value="folders">Folders</sp-menu-item>
        </sp-picker>
        <sp-action-button quiet>
          <sp-icon-filter slot="icon"></sp-icon-filter>
        </sp-action-button>
      </div>

      ${this.viewMode === "grid" ? this.renderGridView() : this.renderListView()}
    `;
  }

  private handleViewChange(e: Event) {
    const target = e.target as any;
    this.selectedView = target.selected;
    this.viewMode = target.selected === "grid" ? "grid" : "list";
  }

  private renderGridView() {
    return html`
      <div class="section-header">
        <h2 class="section-title">Folders</h2>
      </div>

      <div class="file-grid">
        ${this.renderFolder("My Projects")}
        ${this.renderFolder("Templates")}
        ${this.renderFolder("Exports")}
        ${this.renderFolder("Archive")}
      </div>

      <div class="section-header">
        <h2 class="section-title">Recent Files</h2>
        <sp-button-group>
          <sp-action-button size="s" quiet>
            <sp-icon-select-box-all slot="icon"></sp-icon-select-box-all>
          </sp-action-button>
        </sp-button-group>
      </div>

      <div class="file-grid">
        ${this.renderFile("IMG_2043.png", "PNG", "4.2 MB", "2 hours ago")}
        ${this.renderFile("beach_sunset.jpg", "JPEG", "3.8 MB", "Yesterday")}
        ${this.renderFile("mountain_photo.jpg", "JPEG", "5.1 MB", "3 days ago")}
        ${this.renderFile("ocean_view.png", "PNG", "4.7 MB", "5 days ago")}
        ${this.renderFile("city_night.jpg", "JPEG", "6.2 MB", "1 week ago")}
        ${this.renderFile("forest.jpg", "JPEG", "4.9 MB", "1 week ago")}
        ${this.renderFile("flowers.png", "PNG", "3.5 MB", "2 weeks ago")}
        ${this.renderFile("desert_view.jpg", "JPEG", "5.8 MB", "2 weeks ago")}
        ${this.renderFile("architecture.png", "PNG", "7.1 MB", "3 weeks ago")}
        ${this.renderFile("abstract_01.jpg", "JPEG", "4.5 MB", "3 weeks ago")}
        ${this.renderFile("portrait_edit.png", "PNG", "6.8 MB", "1 month ago")}
        ${this.renderFile("landscape_wide.jpg", "JPEG", "8.2 MB", "1 month ago")}
      </div>
    `;
  }

  private renderListView() {
    return html`
      <div class="section-header">
        <h2 class="section-title">All Files</h2>
        <sp-button-group>
          <sp-action-button size="s" quiet>
            <sp-icon-select-box-all slot="icon"></sp-icon-select-box-all>
          </sp-action-button>
        </sp-button-group>
      </div>

      <div class="list-view">
        ${this.renderListItem("My Projects", "Folder", "12 items", "folder")}
        ${this.renderListItem("Templates", "Folder", "8 items", "folder")}
        ${this.renderListItem("Exports", "Folder", "24 items", "folder")}
        ${this.renderListItem("Archive", "Folder", "156 items", "folder")}
        ${this.renderListItem("IMG_2043.png", "PNG Image", "4.2 MB • 2 hours ago", "file")}
        ${this.renderListItem("beach_sunset.jpg", "JPEG Image", "3.8 MB • Yesterday", "file")}
        ${this.renderListItem("mountain_photo.jpg", "JPEG Image", "5.1 MB • 3 days ago", "file")}
        ${this.renderListItem("ocean_view.png", "PNG Image", "4.7 MB • 5 days ago", "file")}
        ${this.renderListItem("city_night.jpg", "JPEG Image", "6.2 MB • 1 week ago", "file")}
        ${this.renderListItem("forest.jpg", "JPEG Image", "4.9 MB • 1 week ago", "file")}
        ${this.renderListItem("flowers.png", "PNG Image", "3.5 MB • 2 weeks ago", "file")}
        ${this.renderListItem("desert_view.jpg", "JPEG Image", "5.8 MB • 2 weeks ago", "file")}
      </div>
    `;
  }

  private renderFolder(name: string) {
    return html`
      <div class="file-item">
        <div class="file-thumbnail">
          <sp-icon-folder size="xxl" style="color: var(--spectrum-global-color-blue-600);"></sp-icon-folder>
          <div class="file-actions">
            <sp-action-button size="xs" quiet>
              <sp-icon-more slot="icon"></sp-icon-more>
            </sp-action-button>
          </div>
        </div>
        <div class="file-info">
          <div class="file-name">${name}</div>
          <div class="file-meta">Folder</div>
        </div>
      </div>
    `;
  }

  private renderFile(name: string, type: string, size: string, modified: string) {
    return html`
      <div class="file-item">
        <div class="file-thumbnail">
          <sp-icon-image size="xxl" class="file-icon"></sp-icon-image>
          <div class="file-badge">${type}</div>
          <div class="file-actions">
            <sp-action-button size="xs" quiet style="background: rgba(255,255,255,0.9);">
              <sp-icon-more slot="icon"></sp-icon-more>
            </sp-action-button>
          </div>
        </div>
        <div class="file-info">
          <div class="file-name">${name}</div>
          <div class="file-meta">${size} • ${modified}</div>
        </div>
      </div>
    `;
  }

  private renderListItem(name: string, type: string, meta: string, itemType: "file" | "folder") {
    return html`
      <div class="list-item">
        <div class="list-thumbnail">
          ${itemType === "folder"
            ? html`<sp-icon-folder size="l" style="color: var(--spectrum-global-color-blue-600);"></sp-icon-folder>`
            : html`<sp-icon-image size="l" style="color: var(--spectrum-global-color-gray-500);"></sp-icon-image>`}
        </div>
        <div class="list-info">
          <div class="list-name">${name}</div>
          <div class="list-meta">${type} • ${meta}</div>
        </div>
        <div class="list-actions">
          <sp-action-button size="s" quiet>
            <sp-icon-edit slot="icon"></sp-icon-edit>
          </sp-action-button>
          <sp-action-button size="s" quiet>
            <sp-icon-share slot="icon"></sp-icon-share>
          </sp-action-button>
          <sp-action-button size="s" quiet>
            <sp-icon-more slot="icon"></sp-icon-more>
          </sp-action-button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-content": MyContent;
  }
}
