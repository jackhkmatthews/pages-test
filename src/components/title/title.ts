import { customElement, html, LitElement, property } from "lit-element";
import _ from "lodash";
import * as moment from "moment";
import "./title.css";

@customElement("title-element")
export class TitleElement extends LitElement {
  @property()
  public copy = "Hi there webpack, typescript and lit-element";
  public render() {
    return html`
      <h1 class="hello">
        ${this.copy} ${moment().format("MMMM Do YYYY, h:mm:ss a")}
      </h1>
    `;
  }
}
