import React, { Component } from "react";
import decoration from "../../../img/decoration.png";
import instagram from "../../../img/insta.png";
import facebook from "../../../img/fb.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      success: false,
      error: false
    };
  }

  changeForm = (e, field) => {
    this.setState({
      [field]: e.target.value
    });
  };

  ValidateSubmit = e => {
    e.preventDefault();
    if (
      this.state.name != "" &&
      (this.state.email != "" &&
        this.state.email.includes("@") &&
        this.state.email.includes(".")) &&
      this.state.message != ""
    ) {
      this.setState(
        {
          success: true,
          name: "",
          email: "",
          message: ""
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              success: false,
              error: false
            });
          }, 1000);
        }
      );
    } else {
      this.setState(
        {
          error: true
        },
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              error: false
            });
          }, 1000);
        }
      );
    }
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <footer id="Footer">
        <div className="footer__wrapper">
          <span>Skontaktuj się z nami</span>
          <img src={decoration} />
          <div className="contact__form">
            <span>Formularz kontaktowy</span>
            <div>
              <input
                type="text"
                id="name"
                placeholder="Imię"
                value={this.state.name}
                onChange={e => this.changeForm(e, "name")}
              />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={this.state.email}
                onChange={e => this.changeForm(e, "email")}
              />
            </div>
            <input
              type="text"
              id="message"
              placeholder="Wiadomość"
              value={this.state.message}
              onChange={e => this.changeForm(e, "message")}
            />
            <input type="submit" value="Wyślij" onClick={this.ValidateSubmit} />
          </div>
          {this.state.success && (
            <span style={{ color: "red" }}>Formularz wysłany, dzięki</span>
          )}
          {this.state.error && (
            <span style={{ color: "red" }}>Uzupełnij pola formularza</span>
          )}
        </div>
        <div className="footer__social">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} />
          </a>
        </div>
      </footer>
    );
  }
}

export { Footer };
