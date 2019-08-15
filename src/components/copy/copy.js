import "./copy.css";

export default function Copy() {
  const copy = document.createElement("p");
  copy.innerText =
    "The reason we need default is that since webpack 4, when importing a CommonJS module, the import will no longer resolve to the value of module.exports, it will instead create an artificial namespace object for the CommonJS module. For more information on the reason behind this, read webpack 4: import() and CommonJs";
  copy.classList.add("copy");
  return copy;
}
