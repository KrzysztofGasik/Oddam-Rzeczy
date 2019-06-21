import React, { Component } from "react";
import { About } from "./About/About";
import { Funds } from "./Funds/Funds";

class LandingPage extends Component {
  render() {
    return (
      <>
        {this.props.user ? null : (
          <>
            <About />
            <Funds />
          </>
        )}
      </>
    );
  }
}

export { LandingPage };
