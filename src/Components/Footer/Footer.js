import React, { Component } from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer__wrapper">
        <span>Skontaktuj się z nami</span>
        <img src="../img/decoration.png" />
        <div className="contact__form">
          <span>Formularz kontaktowy</span>
          <div>
            <input type="text" id="name" placeholder="Imię" />
            <input type="email" id="email" placeholder="Email" />
          </div>
          <input type="text" id="message" placeholder="Wiadomość" />
          <button>Wyślij</button>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
