import React, { Component } from "react";

const BeginContent = [
  {
    icon: "fas fa-hands",
    title: "Wybierz rzeczy",
    info: "ubrania, zabawki, sprzęt i inne"
  },
  {
    icon: "fas fa-download",
    title: "Spakuj je",
    info: "skorzystaj z worków na śmieci"
  },
  {
    icon: "fas fa-binoculars",
    title: "Zdecyduje komu chcesz pomóc",
    info: "wybierz zaufane miejsce"
  },
  {
    icon: "fas fa-people-carry",
    title: "Zamów kuriera",
    info: "kurier przyjedzie w dogodnym terminie"
  }
];

const Begin = () => {
  return (
    <section className="begin__wrapper">
        <span className="begin__title">Wystarczą 4 proste kroki</span>
        <img src="../img/decoration.png" />
        <div className="begin__info">
          {BeginContent.map((val,index) => {
            return (
              <div className="begin__info__steps" key={index}>
                <i className={val.icon} />
                <span>{val.title}</span>
                {/* <span className="line" /> */}
                <hr></hr>
                <span>{val.info}</span>
              </div>
            );
          })}
        </div>
        <button>Załóż konto</button>
    </section>
  );
};

export { Begin };
