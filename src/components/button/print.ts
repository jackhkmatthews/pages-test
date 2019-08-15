import Xml from "./data.xml";
import Json from "./data.json";

export default function printMe() {
  const data = {
    xml: Xml,
    json: Json
  };
  console.log("I get called from print.js!");
  console.log({ data });
}
