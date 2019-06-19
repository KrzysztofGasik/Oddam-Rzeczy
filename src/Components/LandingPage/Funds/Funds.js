import React, { Component } from "react";

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
    </section>
  );
};

export { Funds };
