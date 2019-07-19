import React, { Component } from "react";
import { InfoBarAfterStep1 } from "../InfoBar/InfoBarAfterStep1";
import { Wrapper } from "../Begin/Wrapper";

class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      checkArray: []
    };
  }

  handleOnChange = name => event => {
    this.props.onSave(name, event.target.checked);
  };

  handleOnValue = name => event => {
    this.props.onSave(name, event.target.value);
  };

  handleOnClick = name => {
    this.setState({
      checkArray: name,
      visible: !this.state.visible
    });
  };

  Close = e => {
    e.preventDefault();
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return [
      <InfoBarAfterStep1 key={"InfoBarAfterStep1"} />,
      <Wrapper key={"Wrapper"}>
        <form id="step1" onSubmit={this.props.onSubmit} key={"form1"}>
          <span>Krok 1/4</span>
          <h1>Zaznacz co chcesz oddać:</h1>
          <label>
            <input
              type="checkbox"
              name="ubrania"
              onChange={this.handleOnChange("ubrania")}
              onClick={() => this.handleOnClick("ubrania")}
            />
            <span>ubrania, które nadają się do ponownego użycia</span>
          </label>
          {this.state.visible && this.state.checkArray.includes("ubrania") && (
            <>
              <div className="begin__wrapper__step1">
                <div>
                  <span>Dla kogo</span>
                  <label>
                    <input
                      type="checkbox"
                      name="meskie"
                      onChange={this.handleOnChange("meskie")}
                    />
                    <span>Ubrania męskie</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="damskie"
                      onChange={this.handleOnChange("damskie")}
                    />
                    <span>Ubrania damskie</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="chlopiec"
                      onChange={this.handleOnChange("chlopiec")}
                    />
                    <span>Ubrania dla chłopca</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="dziewczynka"
                      onChange={this.handleOnChange("dziewczynka")}
                    />
                    <span>Ubrania dla dziewczynki</span>
                  </label>
                </div>
                <div>
                  <span>Jakie przeznaczenie?</span>
                  <label>
                    <input
                      type="checkbox"
                      name="jesien"
                      onChange={this.handleOnChange("jesien")}
                    />
                    <span>Sezon jesień-zima</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="wiosna"
                      onChange={this.handleOnChange("wiosna")}
                    />
                    <span>Sezon wiosna-lato</span>
                  </label>
                </div>
              </div>
              <button id="ok" onClick={e => this.Close(e)}>
                OK
              </button>
            </>
          )}
          <label>
            <input
              type="checkbox"
              name="ubrania2"
              onChange={this.handleOnChange("ubrania2")}
              onClick={() => this.handleOnClick("ubrania2")}
            />
            <span>ubrania, do wyrzucenia</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="zabawki"
              onChange={this.handleOnChange("zabawki")}
              onClick={() => this.handleOnClick("zabawki")}
            />
            <span>zabawki</span>
          </label>
          {this.state.visible && this.state.checkArray.includes("zabawki") && (
            <>
              <div className="begin__wrapper__step1">
                <div>
                  <span>Dla kogo</span>
                  <label>
                    <input
                      type="checkbox"
                      name="chlopiecZabawki"
                      onChange={this.handleOnChange("chlopiecZabawki")}
                    />
                    <span>Chłopiec</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="dziewczynkaZabawki"
                      onChange={this.handleOnChange("dziewczynkaZabawki")}
                    />
                    <span>Dziewczynka</span>
                  </label>
                </div>
                <div className="begin__wrapper__option">
                  <span>Wiek</span>
                  <label>
                    <select
                      id="chlopiecWiek"
                      onChange={this.handleOnValue("chlopiecWiek")}
                      name="chlopiecWiek"
                    >
                      <option defaultValue="0-2">0-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6-8">6-8</option>
                      <option value="9-12">9-12</option>
                      <option value="12-15">12-15</option>
                      <option value="15+">15</option>
                    </select>
                  </label>
                  <label>
                    <select
                      id="dziewczynkaWiek"
                      onChange={this.handleOnValue("dziewczynkaWiek")}
                      name="dziewczynkaWiek"
                    >
                      <option defaultValue="0-2">0-2</option>
                      <option value="3-5">3-5</option>
                      <option value="6-8">6-8</option>
                      <option value="9-12">9-12</option>
                      <option value="12-15">12-15</option>
                      <option value="15+">15</option>
                    </select>
                  </label>
                </div>
              </div>
              <button id="ok" onClick={e => this.Close(e)}>
                OK
              </button>
            </>
          )}
          <label>
            <input
              type="checkbox"
              name="ksiazki"
              onChange={this.handleOnChange("ksiazki")}
              onClick={() => this.handleOnClick("ksiazki")}
            />
            <span>książki</span>
          </label>
          {this.state.visible && this.state.checkArray.includes("ksiazki") && (
            <>
              <div className="begin__wrapper__step1">
                <div>
                  <span>Dla kogo</span>
                  <label>
                    <input
                      type="checkbox"
                      name="ksiazkaDorosli"
                      onChange={this.handleOnChange("ksiazkaDorosli")}
                    />
                    <span>Dla dorosłych</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="ksiazkaDzieci"
                      onChange={this.handleOnChange("ksiazkaDzieci")}
                    />
                    <span>Dla dzieci</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="ksiazkaMlodziez"
                      onChange={this.handleOnChange("ksiazkaMlodziez")}
                    />
                    <span>Dla młodzieży</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="ksiazkaEdukacyjna"
                      onChange={this.handleOnChange("ksiazkaEdukacyjna")}
                    />
                    <span>Edukacyjne</span>
                  </label>
                </div>
              </div>
              <button id="ok" onClick={e => this.Close(e)}>
                OK
              </button>
            </>
          )}
          <label>
            <input
              type="checkbox"
              name="inne"
              onChange={this.handleOnChange("inne")}
              onClick={() => this.handleOnClick("inne")}
            />
            <span>inne</span>
          </label>
          {this.state.visible && this.state.checkArray.includes("inne") && (
            <>
              <div className="begin__wrapper__step1">
                <div>
                  <span>Wypisz jakie:</span>
                  <label>
                    <input
                      type="text"
                      name="inneJakie"
                      onChange={this.handleOnValue("inneJakie")}
                    />
                  </label>
                </div>
              </div>
              <button id="ok" onClick={e => this.Close(e)}>
                OK
              </button>
            </>
          )}
          <button id="next" disabled={this.state.checkArray.length ? false : true } onClick={() => this.props.step(2)}>
            Dalej
          </button>
        </form>
      </Wrapper>
    ];
  }
}

export { Form1 };
