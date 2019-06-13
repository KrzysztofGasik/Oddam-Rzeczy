import React, { Component } from "react";

const Header = () => {
  return (
    <header>
      <div className='login__buttons'>
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
    </header>
  );
};

export { Header };
