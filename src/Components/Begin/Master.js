import React, { Component } from "react";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { Form3 } from "./Form3";
import { Form4 } from "./Form4";
import { Form5 } from "./Form5";
import { SumUp } from "./SumUp";

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {},
      step: 1
    };
  }

  handleOnSave = (name, value) => {
    this.setState(prevState => {
      return Object.assign({}, prevState, {
        inputs: Object.assign(prevState.inputs, { [name]: value })
      });
    });
  };

  updateStep = step => {
    this.setState({
      step: step
    });
  };

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <Form1
            onSave={this.handleOnSave}
            step={step => this.updateStep(step)}
          />
        );
      case 2:
        return (
          <Form2
            onSave={this.handleOnSave}
            step={step => this.updateStep(step)}
          />
        );
      case 3:
        return (
          <Form3
            onSave={this.handleOnSave}
            step={step => this.updateStep(step)}
          />
        );
      case 4:
        return (
          <Form4
            onSave={this.handleOnSave}
            step={step => this.updateStep(step)}
          />
        );
      case 5:
        return (
          <Form5
            onSave={this.handleOnSave}
            step={step => this.updateStep(step)}
          />
        );
      case 6:
        return (
          <SumUp
            step={step => this.updateStep(step)}
            ubrania={this.state.inputs.ubrania}
            ubrania2={this.state.inputs.ubrania2}
            zabawki={this.state.inputs.zabawki}
            ksiazki={this.state.inputs.ksiazki}
            inne={this.state.inputs.inne}
            worki={this.state.inputs.worki}
            dzieciom={this.state.inputs.dzieciom}
            samotnymMatkom={this.state.inputs.samotnymMatkom}
            bezdomnym={this.state.inputs.bezdomnym}
            niepelnosprawnym={this.state.inputs.niepelnosprawnym}
            osobomStarszym={this.state.inputs.osobomStarszym}
            DbamOZdrowie={this.state.inputs.DbamOZdrowie}
            DlaDzieci={this.state.inputs.DlaDzieci}
            BezDomu={this.state.inputs.BezDomu}
            ulica={this.state.inputs.ulica} 
            miasto={this.state.inputs.miasto}
            kod={this.state.inputs.kod}
            telefon={this.state.inputs.telefon} 
            data={this.state.inputs.data}
            godzina={this.state.inputs.godzina}
            uwagi={this.state.inputs.uwagi} 
          />
        );
    }
  }
}

export { Master };
