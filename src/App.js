import React, { Component } from "react";
import ReactDom from "react-dom";
import "../scss/style.scss";
import { Header } from "./Components/Header/Header";
import { InfoBar } from "./Components/InfoBar/InfoBar";
import { Begin } from "./Components/Begin/Begin";
import { About } from "./Components/About/About";
import { Funds } from "./Components/Funds/Funds";
import { Footer } from "./Components/Footer/Footer";
import { animateScroll as scroll } from "react-scroll";

class App extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  render() {
    return (
      <>
        <button className="scrollBottom" onClick={this.scrollToBottom}>
          <i className="fas fa-arrow-down" />
        </button>
        <Header />
        <InfoBar />
        <Begin />
        <About />
        <Funds />
        <Footer />
        <button className="scrollTop" onClick={this.scrollToTop}>
          <i className="fas fa-arrow-up" />
        </button>
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
