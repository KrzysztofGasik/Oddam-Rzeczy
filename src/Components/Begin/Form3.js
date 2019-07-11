import React, { Component } from "react";
import { InfoBarAfterStep3 } from "../InfoBar/InfoBarAfterStep3";
import { Wrapper } from "../Begin/Wrapper";

class Form3 extends Component {
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
        <form id="step3">
          <span>Krok 3/4</span>
          <h1>Lokalizacja</h1>
          <label>
            <select id="woj" onChange={this.handleOnChange}>
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
          <div className="begin__wrapper_options">
            <input
              type="checkbox"
              name="dzieciom"
              onChange={this.handleOnChangeCheck("dzieciom")}
            />
            <label for="dzieciom">
              dzieciom
            </label>
            <input
              type="checkbox"
              name="samotnymMatkom"
              onChange={this.handleOnChangeCheck("samotnymMatkom")}
            />
            <label for="samotnymMatkom">
              samotnym matkom
            </label>
            <input
              type="checkbox"
              name="bezdomnym"
              onChange={this.handleOnChangeCheck("bezdomnym")}
            />
            <label for="bezdomnym">
              bezdomnym
            </label>
            <input
              type="checkbox"
              name="niepełnosprawnym"
              onChange={this.handleOnChangeCheck("niepełnosprawnym")}
            />
            <label for="bezdomnym">
              niepełnosprawnym
            </label>
            <input
              type="checkbox"
              name="osobomStarszym"
              onChange={this.handleOnChangeCheck("osobomStarszym")}
            />
            <label for="osobomStarszym">
              osobom starszym
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
            <button id="next" onClick={() => this.props.step(4)}>
              Szukaj
            </button>
          </div>
        </form>
      </Wrapper>
    ];
  }
}

export { Form3 };
