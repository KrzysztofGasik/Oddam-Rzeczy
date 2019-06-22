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

const InfoBarLog = [
  {
    id: 1,
    title: 'Ważne!',
    content: 'Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu je przekazać'
  }
  // {
  //   id: 2,
  //   title: 'Ważne!',
  //   content: 'Wszystkie rzeczy do oddania zapakuj w 60 l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ'
  // }
]

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
      {InfoBarLog.map((val, index) => {
        return (
          <div key={index}>
            <h1>{val.title}</h1>
            <p>{val.content}</p>
          </div>
        );
      })}
    </section>
  );
};

class InfoBar extends Component {
  render() {
    return <>{this.props.user ? <InfoBarAfterLog /> : <InfoBarBeforeLog />}</>;
  }
}

export { InfoBar };
