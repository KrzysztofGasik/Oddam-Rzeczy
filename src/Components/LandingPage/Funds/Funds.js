import React, { Component } from "react";
import { Fundations } from "./Fundations";
import { Organizations } from "./Organizations";
import { LocalFunds } from "./LocalFunds";
import decoration from "../../../../img/decoration.png";

class Funds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fund: Fundations
    };
  }

  changeFund = fund => {
    this.setState({
      fund: fund
    });
  };

  render() {
    return (
      <section id="Funds">
        <span>Komu pomagamy?</span>
        <img src={decoration} />
        <div className="funds__buttons">
          <button onClick={() => this.changeFund(Fundations)}>Fundacjom</button>
          <button onClick={() => this.changeFund(Organizations)}>
            Organizacjom pozarządowym
          </button>
          <button onClick={() => this.changeFund(LocalFunds)}>
            Lokalnym zbiórkom
          </button>
        </div>
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji z którym
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
        {this.state.fund.map(val => {
          return (
            <div className="funds__list" key={val.name}>
              <div className="funds__list__left">
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
  }
}

export { Funds };
