import React, { Component } from "react";

const About = () => {
  return (
    <section className="about__wrapper" id="About">
      <div className="about__info">
        <span>O nas</span>
        <img src="../img/decoration.png" />
        <p>
          Jesteśmy stowarzyszeniem, które pomaga organizować zbiórki
          niepotrzebnych rzeczy. Zapraszamy wszystkie chętne osoby do
          współpracy.
        </p>
      </div>
      <div className="about__img">
        <img src="../img/about.jpg" />
      </div>
    </section>
  );
};

export { About };
