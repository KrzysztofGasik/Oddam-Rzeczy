import React, { Component } from "react";

const InfoBarContent = [
  {
    number: 10,
    title: "Oddanych worków",
    info: "Do tej pory oddano 10 worków, które trafiły do potrzebującyh osób"
  },
  {
    number: 5,
    title: "Wspartych organizacji",
    info: "Zaufało nam już 5 organizacji do których trafiły potrzebne rzeczy"
  },
  {
    number: 7,
    title: "Zorganizowanych zbiórek",
    info: "Udało nam się zaangażować i zorganizować 7 zbiórek"
  }
];

const InfoBarBeforeLog = () => {
  return (
    <section className="infobar__wrapper" id="InfoBar">
      {InfoBarContent.map((val, index) => {
        return (
          <div className="infobar__square" key={index}>
            <span className="infobar__square__number">{val.number}</span>
            <span className="infobar__square__title">{val.title}</span>
            <p>{val.info}</p>
          </div>
        );
      })}
    </section>
  );
};

const InfoBarAfterLog = () => {
  return (
    <section className="infobar__wrapper__after" id="InfoBar">
      <div>
        <h2>Ważne!</h2>
        <p>
          Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy
          wiedzieć komu je przekazać
        </p>
      </div>
    </section>
  );
};

class InfoBar extends Component {
  render() {
    return <>{this.props.user ? <InfoBarAfterLog /> : <InfoBarBeforeLog />}</>;
  }
}

export { InfoBar };
