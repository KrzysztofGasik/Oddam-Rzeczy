import React, { Component } from "react";
import decoration from "../../../../img/decoration.png";
import about from "../../../../img/about.jpg";

const About = () => {
  return (
    <section className="about__wrapper" id="About">
      <div className="about__info">
        <span>O nas</span>
        <img src={decoration} />
        <p>
          Jesteśmy stowarzyszeniem, które pomaga organizować zbiórki
          niepotrzebnych rzeczy. Zapraszamy wszystkie chętne osoby do
          współpracy.
        </p>
      </div>
      <div className="about__img">
        <img src={about} />
      </div>
    </section>
  );
};

export { About };
