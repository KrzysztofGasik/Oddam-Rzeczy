import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false
    };
  }

  CloseLoginPanel = () => {
    this.setState(prevState => {
      return {
        hide: !prevState.hide
      };
    });
  };

  render() {
    return (
      <>
        {this.state.hide ? null : (
          <div className="login__curtain">
            <div className="login__form">
              <button>Zaloguj się</button>
              <button>Zarejestruj się</button>
              <span onClick={this.CloseLoginPanel}>X</span>
            </div>
          </div>
        )}
      </>
    );
  }
}

export { Login };
