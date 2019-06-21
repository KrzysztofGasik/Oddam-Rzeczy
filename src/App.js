import React, { Component } from "react";
import ReactDom from "react-dom";
import { Header } from "./Components/Header/Header";
import { InfoBar } from "./Components/InfoBar/InfoBar";
import { Begin } from "./Components/Begin/Begin";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { Footer } from "./Components/Footer/Footer";
import { animateScroll as scroll } from "react-scroll";
import {HashRouter} from "react-router-dom";
import "../scss/style.scss";

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
        <Header user={true}/> {/* user - props przed zalogowanie i po zalogowaniu */}
        <InfoBar user={true}/>
        <Begin user={true}/>
        <LandingPage user={true}/>
        <Footer />
        <button className="scrollTop" onClick={this.scrollToTop}>
          <i className="fas fa-arrow-up" />
        </button>
        <HashRouter>
        </HashRouter>
      </>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
