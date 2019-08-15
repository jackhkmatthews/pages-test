import printMe from "./print";
import Copy from "../copy/copy";

export default function Button() {
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => {
    printMe();
    document.body.appendChild(Copy());
  };
  return btn;
}
