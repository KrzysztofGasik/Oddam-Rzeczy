import React, { Component, Fragment } from "react";
import { Wrapper } from "../Begin/Wrapper";

class SumUp extends Component {

  render() {
    const {worki}=this.props;
    return [
      <Wrapper key={"Wrapper"}>
        <form id="sumup">
          <h1>Podsumowanie Twojej darowizny</h1>
          <i className="fas fa-box"></i><span>{worki} pudełka </span>
          <div className="begin__wrapper__button">
            <button id="back" onClick={() => this.props.step(5)}>
              Wstecz
            </button>
            <button type="submit" id="submit" value="Wyślij" >
              Potwierdzam
            </button>
          </div>
        </form>
      </Wrapper>
    ];
  }
}

export { SumUp };
