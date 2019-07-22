import React, { Component } from "react";
import decoration from "../../../img/decoration.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailReg: "",
      passwordReg: "",
      passwordReg2: "",
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
    if ((this.state.passwordReg == this.state.passwordReg2) && (this.state.passwordReg != "" && this.state.passwordReg2 != "")) {
      const str = this.state.emailReg;
      const nameReplace = str.replace(/@.*$/, "");
      const name = nameReplace !== str ? nameReplace : null;

      localStorage.setItem("login", name);
      localStorage.setItem("password", this.state.passwordReg);

      this.setState({
        reg: reg,
        register: true
      });
    } else if (this.state.passwordReg != this.state.passwordReg2){
      alert('Hasła muszą być identyczne');
    }
     else if (this.state.emailReg == "") {
      alert('Proszę wpisać adres email');
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
                  value={this.state.emailReg}
                  onChange={e => this.changeForm(e, "emailReg")}
                />
                <input
                  type="password"
                  id="passwordReg"
                  placeholder="Password"
                  value={this.state.passwordReg}
                  onChange={e => this.changeForm(e, "passwordReg")}
                />
                <input
                  type="password"
                  id="passwordReg2"
                  placeholder="Repeat password"
                  value={this.state.passwordReg2}
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
