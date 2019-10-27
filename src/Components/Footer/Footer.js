import React, { Component } from "react";
import decoration from "../../../img/decoration.png";
import instagram from "../../../img/insta.png";
import facebook from "../../../img/fb.png";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emailform: "",
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
    let mailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;

    if (this.state.name === "") {
      alert('Uzupełnij imię');
      this.setState({error: true},() => {this.timer = setTimeout(() => {this.setState({error: false});}, 1000);});
    } else if (this.state.emailform === "" && !this.state.emailform.match(mailRegex)) {
      alert('Niepoprawny adres mailowy');
      this.setState({error: true},() => {this.timer = setTimeout(() => {this.setState({error: false});}, 1000);});
    } else if (this.state.message === "") {
      alert('Puste pole wiadomość');
      this.setState({error: true},() => {this.timer = setTimeout(() => {this.setState({error: false});}, 1000);});
    }

    if (this.state.name !== "" && this.state.emailform !== "" && this.state.message !== "" ) {
      this.setState(
        {success: true,name: "",emailform: "",message: ""},
        () => {
          this.timer = setTimeout(() => {
            this.setState({
              success: false,
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
                required
              />
              <input
                type="email"
                id="emailform"
                placeholder="email"
                value={this.state.emailform}
                onChange={e => this.changeForm(e, "emailform")}
                required
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
