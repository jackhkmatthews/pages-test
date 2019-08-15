import Copy from "../copy/copy";
import printMe from "./print";

export default function Button(): HTMLButtonElement {
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => {
    printMe();
    document.body.appendChild(Copy());
  };
  return btn;
}
