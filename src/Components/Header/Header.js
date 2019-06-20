import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Login } from "../Login/Login";

const BgBeforeLog = {
  backgroundImage: "url('../img/header_start_img.jpg')"
};

const BgAfterLog = {
  backgroundImage: "url('../img/header_logged_img.jpg')"
};

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
        <div className="header__wrapper">
          <p>Zacznij pomagać!</p>
          <p>Oddaj niechciane rzeczy w zaufane ręce</p>
          <img src="../img/decoration.png" />
          <div className="header__buttons">
            <button onClick={this.ShowLoginPanel}>ODDAJ RZECZY</button>
            <button onClick={this.ShowLoginPanel}>ZORGANIZUJ ZBIÓRKĘ</button>
          </div>
        </div>
        {this.state.showLoginPanel ? <Login /> : null}
      </header>
    );
  }
}

export { Header };
