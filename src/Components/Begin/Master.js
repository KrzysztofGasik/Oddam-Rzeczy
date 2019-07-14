import React, { Component } from "react";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";
import { Form3 } from "./Form3";
import { Form4 } from "./Form4";
import { Form5 } from "./Form5";

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

  handleOnSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    //   fetch(-- tu this.state.inputs)
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
    }

    //onSubmit={this.handleOnSubmit}
  }
}

export { Master };
