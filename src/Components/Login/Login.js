import React, { Component } from "react";
import {Register} from "../Register/Register";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      register: false
    };
  }

  changeForm = (e, field) => {
    this.setState({
      [field]: e.target.value
    });
  };

  showRegistrationForm = () => {
    this.setState({
      register: true
    })
  }

  render() {
    console.log(this.state.reg);
    return (
      <>
        {this.state.register ? true : (
          <section className="login__curtain">
            <div className="login__wrapper">
              <p>Zaloguj się</p>
              <img src="../img/decoration.png" />
              <div className="login__form">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.changeForm(e, "email")}
                />
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.changeForm(e, "password")}
                />
              </div>
              <div className="login__buttons">
                <button onClick={this.showRegistrationForm}>Załóż konto</button>
                <button>Zaloguj</button>
                {this.state.reg && <Register />}
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export { Login };
