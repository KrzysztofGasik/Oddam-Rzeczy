import React, { Component } from "react";
import ReactDom from "react-dom";
import "../scss/style.scss";
import { Header } from "./Components/Header/Header";
import { InfoBar } from "./Components/InfoBar/InfoBar";
import { Begin } from "./Components/Begin/Begin";
import { About } from "./Components/About/About";

import { Footer } from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <InfoBar />
        <Begin />
        <About />
        <Footer />
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
