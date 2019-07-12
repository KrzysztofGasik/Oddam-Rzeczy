import React, { Component } from "react";
import ReactDom from "react-dom";
import { Header } from "./Components/Header/Header";
import { Begin } from "./Components/Begin/Begin";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { Footer } from "./Components/Footer/Footer";
import { animateScroll as scroll } from "react-scroll";
import { BrowserRouter } from "react-router-dom";
import "../scss/style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logOn: localStorage.getItem("success") == 1 ? true : false,
      step: 0,
      log: 0
    };
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  updateStep = step => {
    this.setState({
      step: step
    });
  };

  render() {
    // console.log(this.state.log);
    return (
      <BrowserRouter>
        <button className="scrollBottom" onClick={this.scrollToBottom}>
          <i className="fas fa-arrow-down" />
        </button>
        <Header
          user={this.state.logOn ? true : false}
        />
        <Begin
          user={this.state.logOn ? true : false}
          updateStep={this.updateStep}
        />
        <LandingPage user={this.state.logOn ? true : false} />
        <Footer />
        <button className="scrollTop" onClick={this.scrollToTop}>
          <i className="fas fa-arrow-up" />
        </button>
      </BrowserRouter>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
