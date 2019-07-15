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
          <span>ubrania, które nadają się do ponownego użycia</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="ubrania2"
            onChange={this.handleOnChange("ubrania2")}
          />
          <span>ubrania, do wyrzucenia</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="zabawki"
            onChange={this.handleOnChange("zabawki")}
          />
          <span>zabawki</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="ksiazki"
            onChange={this.handleOnChange("ksiazki")}
          />
          <span>książki</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="inne"
            onChange={this.handleOnChange("inne")}
          />
          <span>inne</span>
        </label>
        <button id="next" onClick={()=> this.props.step(2)}>Dalej</button>
      </form>
      </Wrapper>
    ];
  }
}

export {Form1};
