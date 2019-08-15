import printMe from "./print.js";

export default function Button() {
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = () => {
    printMe();
    import(/* webpackChunkName: "copy" */ "../copy/copy.js").then(
      ({ default: Copy }) => {
        document.body.appendChild(Copy());
      }
    );
  };
  return btn;
}
