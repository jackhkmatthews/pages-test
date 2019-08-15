import _ from "lodash";
import * as moment from "moment";
import "./title.css";

export default function Title() {
  const title = document.createElement("h1");
  title.innerHTML = _.join(
    ["Hi there", "webpack<br>", moment().format("MMMM Do YYYY, h:mm:ss a")],
    " ",
  );
  title.classList.add("hello");
  return title;
}
