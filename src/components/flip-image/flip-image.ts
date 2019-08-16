import { html } from "lit-html";
import James from "./james.jpg";

export const flipImage = () => html`
  <img src=${James} />
  <img src=${James} />
`;
