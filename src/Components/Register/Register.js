import React, { Component } from "react";
import decoration from "../../../img/decoration.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      register: localStorage.getItem('login') != null ? true : false
    };
  }

  changeForm = (e, field) => {
    this.setState({
      [field]: e.target.value
    });
  };

  validRegistration = (e,reg) => {
    e.preventDefault();
    if (this.state.password === this.state.password2) {
      const str = this.state.email;
      const nameReplace = str.replace(/@.*$/, "");
      const name = nameReplace !== str ? nameReplace : null;

      localStorage.setItem("login", name);
      localStorage.setItem("password", this.state.password);

      this.setState({
        reg: reg,
        register: true
      });
    } else {
      alert('Hasła muszą być identyczne');
    }
  };

  render() {
    return (
      <>
        {this.state.register ? true : (
          <section className="register__curtain">
            <div className="register__wrapper">
              <p>Załóż konto</p>
              <img src={decoration} />
              <form className="register__form">
                <input
                  type="email"
                  id="emailReg"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.changeForm(e, "emailReg")}
                />
                <input
                  type="password"
                  id="passwordReg"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.changeForm(e, "passwordReg")}
                />
                <input
                  type="password"
                  id="passwordReg2"
                  placeholder="Repeat password"
                  value={this.state.password2}
                  onChange={e => this.changeForm(e, "passwordReg2")}
                />
              </form>
              <div className="register__buttons">
                <button onClick={this.validLog}>Zaloguj</button>
                <button onClick={(e)=>this.validRegistration(e,this.props.reg(1))}>Załóż konto</button>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}
export { Register };
