import React, { Component } from "react";
import {InfoBarAfterStep1} from "../InfoBar/InfoBarAfterStep1";
import {Wrapper} from "../Begin/Wrapper";

class Form1 extends Component {
  handleOnChange = name => event => {
    this.props.onSave(name, event.target.checked);
  };

  render() {
    return [
      <InfoBarAfterStep1 key={'InfoBarAfterStep1'}/>,
      <Wrapper key={'Wrapper'}>
      <form id="step1" onSubmit={this.props.onSubmit} key={'form1'}>
        <span>Krok 1/4</span>
        <h1>Zaznacz co chcesz oddać:</h1>
        <label>
          <input
            type="checkbox"
            name="ubrania"
            onChange={this.handleOnChange("ubrania")}
          />
          ubrania, które nadają się do ponownego użycia
        </label>
        <label>
          <input
            type="checkbox"
            name="ubrania2"
            onChange={this.handleOnChange("ubrania2")}
          />
          ubrania, do wyrzucenia
        </label>
        <label>
          <input
            type="checkbox"
            name="zabawki"
            onChange={this.handleOnChange("zabawki")}
          />
          zabawki
        </label>
        <label>
          <input
            type="checkbox"
            name="ksiazki"
            onChange={this.handleOnChange("ksiazki")}
          />
          książki
        </label>
        <label>
          <input
            type="checkbox"
            name="inne"
            onChange={this.handleOnChange("inne")}
          />
          inne
        </label>
        <button id="next" onClick={()=> this.props.step(2)}>Dalej</button>
        {/* <input type="submit" id="next" value="Dalej" ></input>  Na koniec formularza*/}
      </form>
      </Wrapper>
    ];
  }
}

export {Form1};
