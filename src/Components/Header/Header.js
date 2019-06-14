import React, { Component } from "react";

const Header = () => {
  return (
    <header>
      <div className="login__buttons">
        <button>Zaloguj się</button>
        <button>Załóż konto</button>
      </div>
      <nav>
        <ul>
          <li>Start</li>
          <li>O co chodzi?</li>
          <li>O nas</li>
          <li>Fundacje i organizacje</li>
          <li>Kontakt</li>
        </ul>
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
