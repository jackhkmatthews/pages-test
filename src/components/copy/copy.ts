import { customElement, html, LitElement, property } from "lit-element";
import "./copy.css";

@customElement("copy-element")
export class CopyElement extends LitElement {
  @property()
  public copy = `The reason we need default is that since
      webpack 4, when importing a CommonJS module,
      the import will no longer resolve to the
      value of module.exports, it will instead
      create an artificial namespace object
      for the CommonJS module. For more information
      on the reason behind this, read webpack 4: import() and CommonJs`;
  public render() {
    return html`
      <p class="copy">
        ${this.copy}
      </p>
    `;
  }
}
