import React, { Component } from "react";
import { InfoBarAfterStep3 } from "../InfoBar/InfoBarAfterStep3";
import { Wrapper } from "../Begin/Wrapper";

class Form3 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkArray: []
    };
  }

  handleOnClick = name => {
    this.setState({
      checkArray: name,
    });
  };

  handleOnChange = name => event => {
    this.props.onSave(name, event.target.value);
  };

  handleOnChangeCheck = name => event => {
    this.props.onSave(name, event.target.checked);
  };

  render() {
    return [
      <InfoBarAfterStep3 key={"InfoBarAfterStep3"} />,
      <Wrapper key={"Wrapper"}>
        <form id="step3" key={"form3"}>
          <span>Krok 3/4</span>
          <h1>Lokalizacja</h1>
          <label>
            <select
              id="woj"
              onChange={this.handleOnChange("wojewodztwo")}
              name="wojewodztwo"
            >
              <option defaultValue="wybierz">-wybierz-</option>
              <option value="dolnośląskie">dolnośląskie</option>
              <option value="kujawsko-pomorskie">kujawsko-pomorskie</option>
              <option value="lubelskie">lubelskie</option>
              <option value="lubuskie">lubuskie</option>
              <option value="łódzkie">łódzkie</option>
              <option value="małopolskie">małopolskie</option>
              <option value="mazowieckie">mazowieckie</option>
              <option value="opolskie">opolskie</option>
              <option value="podkarpackie">podkarpackie</option>
              <option value="podlaskie">podlaskie</option>
              <option value="pomorskie">pomorskie</option>
              <option value="śląskie">śląskie</option>
              <option value="świętokrzyskie">świętokrzyskie</option>
              <option value="warmińsko-mazurskie">warmińsko-mazurskie</option>
              <option value="wielkopolskie">wielkopolskie</option>
              <option value="16">zachodniopomorskie</option>
            </select>
          </label>
          <h3>Komu chcesz pomóc?</h3>
          <div className="begin__wrapper__step3">
            <label>
              <input
                type="checkbox"
                name="dzieciom"
                onChange={this.handleOnChangeCheck("dzieciom")}
                onClick={() => this.handleOnClick("dzieciom")}
              />
              <span>dzieciom</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="samotnymMatkom"
                onChange={this.handleOnChangeCheck("samotnymMatkom")}
                onClick={() => this.handleOnClick("samotnymMatkom")}
              />
             <span>samotnym matkom</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="bezdomnym"
                onChange={this.handleOnChangeCheck("bezdomnym")}
                onClick={() => this.handleOnClick("bezdomnym")}
              />
              <span>bezdomnym</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="niepelnosprawnym"
                onChange={this.handleOnChangeCheck("niepełnosprawnym")}
                onClick={() => this.handleOnClick("niepełnosprawnym")}
              />
              <span>niepełnosprawnym</span>
            </label>
            <label>
              <input
                type="checkbox"
                name="osobomStarszym"
                onChange={this.handleOnChangeCheck("osobomStarszym")}
                onClick={() => this.handleOnClick("osobomStarszym")}
              />
             <span> osobom starszym</span>
            </label>
          </div>
          <label id="searchBar">
            Wpisz nazwę konkretnej organizacji (opcjonalnie)
            <input
            type="search"
            name="searchOrg"
            onChange={this.handleOnChange("searchOrg")}
          />
          </label>
          <div className="begin__wrapper__button">
            <button id="back" onClick={() => this.props.step(2)}>
              Wstecz
            </button>
            <button id="next" disabled={this.state.checkArray.length ? false : true } onClick={() => this.props.step(4)}>
              Szukaj
            </button>
          </div>
        </form>
      </Wrapper>
    ];
  }
}

export { Form3 };
