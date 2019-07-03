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

export const InfoBarBeforeLog = () => {
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
