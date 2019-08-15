import Button from "./components/button/button";
import Image from "./components/image/image";
import Title from "./components/title/title";
import "./style.css";

function app() {
  const element = document.createElement("div");
  const title = Title();
  const image = Image();
  const button = Button();

  element.appendChild(title);
  element.appendChild(image);
  element.appendChild(button);

  return element;
}

document.body.appendChild(app());
