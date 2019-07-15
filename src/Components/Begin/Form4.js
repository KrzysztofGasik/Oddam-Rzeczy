import React, { Component,Fragment } from "react";
import { InfoBarAfterStep4 } from "../InfoBar/InfoBarAfterStep4";
import { Wrapper } from "../Begin/Wrapper";
import { Fundations } from "../LandingPage/Funds/Fundations";

class Form4 extends Component {
  handleOnChange = name => event => {
    this.props.onSave(name, event.target.checked);
  };

  render() {
    return [
      <InfoBarAfterStep4 key={"InfoBarAfterStep4"} />,
      <Wrapper key={"Wrapper"}>
        <form id="step4" key={'form4'}>
          <span>Krok 3/4</span>
          <h1>Wybierz organizację, której chcesz pomóc</h1>
          <p />
          {Fundations.map(val => {
            return (
              <Fragment key={val.name}>
                <div className="begin__wrapper_options" >
                  <input
                    type="checkbox"
                    name={val.name}
                    onChange={this.handleOnChange(val.name)}
                  />
                  <label>
                    <h3>{val.name}</h3>
                    <p>Cel i misja: {val.aim}</p>
                  </label>
                </div>
                <hr className="hr__custom" />
              </Fragment>
            );
          })}
          <div className="begin__wrapper__button">
            <button id="back" onClick={() => this.props.step(3)}>
              Wstecz
            </button>
            <button id="next" onClick={() => this.props.step(5)}>
              Dalej
            </button>
          </div>
        </form>
      </Wrapper>
    ];
  }
}

export { Form4 };
