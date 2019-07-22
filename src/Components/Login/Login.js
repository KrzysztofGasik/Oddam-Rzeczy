import React, { Component } from "react";
import decoration from "../../../img/decoration.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailLog: "",
      passwordLog: "",
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
    const Str = this.state.emailLog;
    const NameReplace = Str.replace(/@.*$/, "");
    const EmailType = NameReplace !== Str ? NameReplace : null;
    const PasswordStore = localStorage.getItem("password");
    const PasswordType = this.state.passwordLog;
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
              <form className="login__form">
                <input
                  type="email"
                  id="emailLog"
                  placeholder="Email"
                  value={this.state.emailLog}
                  onChange={e => this.changeForm(e, "emailLog")}
                />
                <input
                  type="password"
                  id="passwordLog"
                  placeholder="Password"
                  value={this.state.passwordLog}
                  onChange={e => this.changeForm(e, "passwordLog")}
                />
              </form>
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
