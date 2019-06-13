import React, {Component,} from "react";
import ReactDom from "react-dom";

class App extends Component {

  render() {
    return (
      <>
      </>
    )
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
