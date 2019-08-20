import { customElement, html, LitElement, property } from "lit-element";
import printMe from "./print";

@customElement("button-element")
export class ButtonElement extends LitElement {
  @property()
  public copy = "Click me and check the console!";
  public handleClick() {
    printMe();
    document.body.appendChild(document.createElement("copy-element"));
  }
  public render() {
    return html`
      <button @click="${this.handleClick}">
        ${this.copy}
      </button>
    `;
  }
}
