import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: ""
    };
  }

  changeForm = (e, field) => {
    this.setState({
      [field]: e.target.value
    });
  };

  render() {
    return (
      <>
        {this.state.hide ? null : (
          <section className="register__curtain">
            <div className="register__wrapper">
              <p>Załóż konto</p>
              <img src="../img/decoration.png" />
              <div className="register__form">
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
                <input
                  type="password"
                  id="password2"
                  placeholder="Repeat password"
                  value={this.state.password2}
                  onChange={e => this.changeForm(e, "password")}
                />
              </div>
              <div className="register__buttons">
                <button>Zaloguj</button>
                <button>Załóż konto</button>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export { Register };
