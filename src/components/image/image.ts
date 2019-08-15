import James from "./james.jpg";

export default function Img() {
  const myImage = new Image();
  myImage.src = James;
  return myImage;
}
