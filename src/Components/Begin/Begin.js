import React, { Component } from "react";
import { Master } from "./Master";
import { InfoBarBeforeLog } from "../InfoBar/InfoBarBefore";
import { Register } from "../Register/Register";
import decoration from "../../../img/decoration.png";

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

const BeginBeforeLog = () => {
  return [
    <InfoBarBeforeLog key="InfoBarBeforeLog" />,
    <section className="begin__wrapper" id="Begin" key="BeginBeforeLog">
      <span className="begin__title">Wystarczą 4 proste kroki</span>
      <img src={decoration} />
      <div className="begin__info">
        {BeginContent.map(val => {
          return (
            <div className="begin__info__steps" key={val.icon}>
              <i className={val.icon} />
              <span>{val.title}</span>
              <hr />
              <span>{val.info}</span>
            </div>
          );
        })}
      </div>
      <button>Załóż konto</button>
    </section>
  ];
};

const BeginAfterLog = () => {
  return <Master />;
};

class Begin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginPanel: false
    };
  }

  ShowLoginPanel = () => {
    this.setState(prevState => {
      return {
        showLoginPanel: !prevState.showLoginPanel
      };
    });
  };

  updateReg = reg => {
    this.setState({
      reg: reg,
      showLoginPanel: false
    });
  };

  render() {
    return (
      <>
        {this.props.user ? (
          <BeginAfterLog />
        ) : (
          [
            <InfoBarBeforeLog key="InfoBarBeforeLog" />,
            <section className="begin__wrapper" id="Begin" key="BeginBeforeLog">
              <span className="begin__title">Wystarczą 4 proste kroki</span>
              <img src={decoration} />
              <div className="begin__info">
                {BeginContent.map(val => {
                  return (
                    <div className="begin__info__steps" key={val.icon}>
                      <i className={val.icon} />
                      <span>{val.title}</span>
                      <hr />
                      <span>{val.info}</span>
                    </div>
                  );
                })}
              </div>
              <button onClick={this.ShowLoginPanel}>Załóż konto</button>
              {this.state.showLoginPanel ? (
                <Register reg={reg => this.updateReg(reg)} />
              ) : null}
            </section>
          ]
        )}
      </>
    );
  }
}

export { Begin };
