import { customElement, html, LitElement } from "lit-element";
import James from "./james.jpg";

@customElement("image-flip-element")
export class ImageFlipElement extends LitElement {
  public render() {
    return html`
      <img src=${James} />
      <img src=${James} />
    `;
  }
}
