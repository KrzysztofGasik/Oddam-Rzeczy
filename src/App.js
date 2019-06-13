import React, { Component } from "react";
import ReactDom from "react-dom";
import "../scss/style.scss";
import { Header } from "./Components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
