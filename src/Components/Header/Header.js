import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {

  return (
    <header>
      <div className="login__buttons">
        <button>Zaloguj się</button>
        <button>Załóż konto</button>
      </div>
      <nav>
          <Link to="InfoBar"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Start</Link>
          <Link to="Begin"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >O co chodzi?</Link>
          <Link to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >O nas</Link>
          <Link to="Funds"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >Fundacje i organizacje</Link>
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
          <button>ODDAJ RZECZY</button>
          <button>ZORGANIZUJ ZBIÓRKĘ</button>
        </div>
      </div>
    </header>
  );
};

export { Header };
