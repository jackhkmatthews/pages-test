import Json from "./data.json";
import Xml from "./data.xml";

export default function printMe() {
  const data = {
    json: Json,
    xml: Xml
  };
  console.log({ data });
}
