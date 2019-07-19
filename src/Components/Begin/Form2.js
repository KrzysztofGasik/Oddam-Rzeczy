import React, { Component } from "react";
import {InfoBarAfterStep2} from "../InfoBar/InfoBarAfterStep2";
import {Wrapper} from "../Begin/Wrapper";

class Form2 extends Component {

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

  render() {
    return [
      <InfoBarAfterStep2 key={'InfoBarAfterStep2'} />,
      <Wrapper key={'Wrapper'}>
      <form id="step2" key={'form2'}>
        <span>Krok 2/4</span>
        <label>Podaj liczbę 60l worków, w które zostaną spakowane rzeczy:
        <select id="bags" onChange={this.handleOnChange("worki")} name="worki" onClick={() => this.handleOnClick("worki")}>
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
        <button id="next" disabled={this.state.checkArray.length ? false : true } onClick={()=>this.props.step(3)}>Dalej</button>
        </div>
      </form>
      </Wrapper>
    ];
  }
}

export {Form2};
