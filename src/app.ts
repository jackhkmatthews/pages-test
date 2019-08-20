import "./components/button/button";
import "./components/copy/copy";
import "./components/flip-image/flip-image";
import "./components/title/title";
import "./style.css";

function app() {
  const element = document.createElement("div");
  const title = document.createElement("title-element");
  const button = document.createElement("button-element");
  const imageFlip = document.createElement("image-flip-element");

  element.appendChild(imageFlip);
  element.appendChild(title);
  element.appendChild(button);

  return element;
}

document.body.appendChild(app());
