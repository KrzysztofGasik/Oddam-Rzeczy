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
      change: false,
      step: 0
    };
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  changeLog = () => {
    this.setState(prevState => {
      return {
        change: !prevState.change
      };
    });
  };

  updateStep = step => {
    this.setState({
      step: step
    });
  };

  render() {
    return (
      <BrowserRouter>
        <button className="scrollBottom" onClick={this.scrollToBottom}>
          <i className="fas fa-arrow-down" />
        </button>
        <button className="LogOn" onClick={this.changeLog}>
          Logowanie
        </button>
        <Header user={this.state.change ? true : false} />
        <Begin
          user={this.state.change ? true : false}
          updateStep={this.updateStep}
        />
        <LandingPage user={this.state.change ? true : false} />
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
