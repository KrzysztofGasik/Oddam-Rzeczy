import React, { Component } from "react";

const Fundations = [
  {
    name: "Fundacja 'Dbam o Zdrowie'",
    aim: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej",
    gifts: "ubrania, jedzenie, sprzęt AGD, meble zabawki"
  },
  {
    name: "Fundacja 'Dla dzieci'",
    aim: "Pomoc dzieciom z ubogich rodzin",
    gifts: "ubrania, meble, zabawki"
  },
  {
    name: "Fundacja 'Bez domu'",
    aim: "Pomoc dla osób nie posiadających miejsca zamieszkania",
    gifts: "ubrania, jedzenie, ciepłe koce"
  }
];

const Funds = () => {
  return (
    <section id="Funds">
      <span>Komu pomagamy?</span>
      <img src="../img/decoration.png" />
      <div className="funds__buttons">
        <button>Fundacjom</button>
        <button>Organizacjom pozarządowym</button>
        <button>Lokalnym zbiórkom</button>
      </div>
      <p>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji z którym
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      {Fundations.map(val => {
        return (
          <div className="funds__list" key={val.name}>
            <div className="funds__list__left" >
            <h3>{val.name}</h3>
            <p>Cel i misja: {val.aim}</p>
              <hr />
            </div>
            <div className="funds__list__right">
              <h3>Empty</h3>
              <p>{val.gifts}</p>
              <hr />
            </div>
          </div>
        );
      })}
      <div className="funds__list__pages">
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </section>
  );
};

export { Funds };
