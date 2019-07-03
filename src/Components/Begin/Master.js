import React, { Component } from "react";
import { Form1 } from "./Form1";
import { Form2 } from "./Form2";

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
    }

    //onSubmit={this.handleOnSubmit}
  }
}

export { Master };
