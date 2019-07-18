import React, { Component } from "react";
import decoration from "../../../img/decoration.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      login: false
    };
  }

  changeForm = (e, field) => {
    this.setState({
      [field]: e.target.value
    });
  };

  showRegistrationForm = () => {
    this.setState({
      login: true
    })
  }

  validLogIn = (e,log) => {
    e.preventDefault();
    const EmailStore= localStorage.getItem("login");
    const Str = this.state.email;
    const NameReplace = Str.replace(/@.*$/, "");
    const EmailType = NameReplace !== Str ? NameReplace : null;
    const PasswordStore = localStorage.getItem("password");
    const PasswordType = this.state.password;
    console.log(EmailStore,EmailType,PasswordStore,PasswordType);
    if ((EmailStore == EmailType) && (PasswordStore == PasswordType)) {
      localStorage.setItem("success", 1);
      this.setState({
        log: log,
        login: true
      });
      window.location.reload();
    } else {
      alert("nazwa użytkownika lub hasło niepoprawne");
    }
  };

  render() {
    return (
      <>
        {this.state.login ? true : (
          <section className="login__curtain">
            <div className="login__wrapper">
              <p>Zaloguj się</p>
              <img src={decoration} />
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
                <button>Załóż konto</button>
                <button onClick={(e)=>this.validLogIn(e,this.props.log(1))}>Zaloguj</button>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export { Login };
