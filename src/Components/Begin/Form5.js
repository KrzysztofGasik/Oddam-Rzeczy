import React, { Component, Fragment } from "react";
import { InfoBarAfterStep5 } from "../InfoBar/InfoBarAfterStep5";
import { Wrapper } from "../Begin/Wrapper";

class Form5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkArray: []
    };
  }

  handleOnClick = name => {
    this.setState({
      checkArray: [...this.state.checkArray, name]
    });
  };

  handleOnChange = name => event => {
    this.props.onSave(name, event.target.value);
  };

  render() {
    return [
      <InfoBarAfterStep5 key={"InfoBarAfterStep5"} />,
      <Wrapper key={"Wrapper"}>
        <form id="step5" key={"form5"}>
          <span>Krok 4/4</span>
          <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
          <p />
          <div className="begin__wrapper__forms">
            <div className="begin__wrapper__address">
              <span>Adres odbioru</span>
              <label>
                Ulica
                <input
                  type="text"
                  name="ulica"
                  onChange={this.handleOnChange("ulica")}
                  onClick={() => this.handleOnClick("ulica")}
                />
              </label>
              <label>
                Miasto
                <input
                  type="text"
                  name="miasto"
                  onChange={this.handleOnChange("miasto")}
                  onClick={() => this.handleOnClick("miasto")}
                />
              </label>
              <label>
                Kod pocztowy
                <input
                  type="text"
                  name="kod"
                  onChange={this.handleOnChange("kod")}
                  onClick={() => this.handleOnClick("kod")}
                />
              </label>
              <label>
                Nr telefonu
                <input
                  type="text"
                  name="telefon"
                  onChange={this.handleOnChange("telefon")}
                  onClick={() => this.handleOnClick("telefon")}
                />
              </label>
            </div>
            <div className="begin__wrapper__address">
              <span>Termin odbioru</span>
              <label>
                Data
                <input
                  type="text"
                  name="data"
                  onChange={this.handleOnChange("data")}
                  onClick={() => this.handleOnClick("data")}
                />
              </label>
              <label>
                Godzina
                <input
                  type="text"
                  name="godzina"
                  onChange={this.handleOnChange("godzina")}
                  onClick={() => this.handleOnClick("godzina")}
                />
              </label>
              <label>
                Uwagi dla kuriera
                <input
                  type="text"
                  name="uwagi"
                  id="uwagi"
                  onChange={this.handleOnChange("uwagi")}
                  onClick={() => this.handleOnClick("uwagi")}
                />
              </label>
            </div>
          </div>
          <div className="begin__wrapper__button">
            <button id="back" onClick={() => this.props.step(4)}>
              Wstecz
            </button>
            <button
              id="next"
              disabled={this.state.checkArray.length > 7 ? false : true}
              onClick={() => this.props.step(6)}
            >
              Dalej
            </button>
          </div>
        </form>
      </Wrapper>
    ];
  }
}

export { Form5 };
