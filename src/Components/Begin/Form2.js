import React, { Component } from "react";
import {InfoBarAfterStep2} from "../InfoBar/InfoBarAfterStep2";
import {Wrapper} from "../Begin/Wrapper";

class Form2 extends Component {
  handleOnChange = name => event => {
    this.props.onSave(name, event.target.value);
  };

  render() {
    return [
      <InfoBarAfterStep2 key={'InfoBarAfterStep2'} />,
      <Wrapper>
      <form id="step2" >
        <label>Podaj liczbę 60l worków, w które zostaną spakowane rzeczy:
        <select id="bags" onChange={this.handleOnChange}>
          <option defaultValue="wybierz">-wybierz-</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value=">10">>10</option>
        </select>
        </label>	
        <div className="begin__wrapper__button">
        <button id="back" onClick={()=>this.props.step(1)}>Wstecz</button>
        <button id="next" onClick={()=>this.props.step(3)}>Dalej</button>
        </div>
      </form>
      </Wrapper>
    ];
  }
}

export {Form2};
