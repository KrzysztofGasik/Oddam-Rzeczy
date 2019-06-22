import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Login } from "../Login/Login";
import { Register } from "../Register/Register";
import { Route } from "react-router-dom";

const BgBeforeLog = {
  backgroundImage: "url('../img/header_start_img.jpg')"
};

const BgAfterLog = {
  backgroundImage: "url('../img/header_logged_img.jpg')"
};

const Steps = [
  {
    stepNumber: "1",
    stepText: "Wybierz rzeczy"
  },
  {
    stepNumber: "2",
    stepText: "Spakuj je w worki"
  },
  {
    stepNumber: "3",
    stepText: "Wybierz fundację"
  },
  {
    stepNumber: "4",
    stepText: "Zamów kuriera"
  }
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginPanel: false
    };
  }

  ShowLoginPanel = () => {
    this.setState(prevState => {
      return {
        showLoginPanel: !prevState.showLoginPanel
      };
    });
  };

  render() {
    // {this.props.user ? zalogowany : niezalogowany}
    console.log(Steps);
    return (
      <header style={this.props.user ? BgAfterLog : BgBeforeLog}>
        <div className="login__buttons">
          <button>Zaloguj się</button>
          <button>Załóż konto</button>
        </div>
        <nav>
          <Link
            to="InfoBar"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Start
          </Link>
          <Link to="Begin" spy={true} smooth={true} offset={-70} duration={500}>
            O co chodzi?
          </Link>
          <Link to="About" spy={true} smooth={true} offset={-70} duration={500}>
            O nas
          </Link>
          <Link to="Funds" spy={true} smooth={true} offset={-70} duration={500}>
            Fundacje i organizacje
          </Link>
          <Link
            to="Footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Kontakt
          </Link>
        </nav>
        {this.props.user ? (
          <div className="header__wrapper">
            <p>Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</p>
            <img src="../img/decoration.png" />
            <p>Wystarczą 4 proste kroki</p>
            <div className="header__step__wrapper">
            {Steps.map((val, index) => {
              return (
                <div className="header__step" key={index}>
                  <div className="header__step__content">
                    <p>{val.stepNumber}</p>
                    <p>{val.stepText}</p>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        ) : (
          <div className="header__wrapper">
            <p>Zacznij pomagać!</p>
            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
            <img src="../img/decoration.png" />
            <div className="header__buttons">
              <button onClick={this.ShowLoginPanel}>ODDAJ RZECZY</button>
              <button onClick={this.ShowLoginPanel}>ZORGANIZUJ ZBIÓRKĘ</button>
            </div>
          </div>
        )}
      </header>
    );
  }
}

export { Header };
