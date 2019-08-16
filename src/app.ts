import Button from "./components/button/button";
import flipImage from "./components/flip-image/flip-image";
import Title from "./components/title/title";
import "./style.css";

function app() {
  const element = document.createElement("div");
  const title = Title();
  const image = flipImage();
  const button = Button();

  element.appendChild(title);
  element.appendChild(image);
  element.appendChild(button);

  return element;
}

document.body.appendChild(app());
