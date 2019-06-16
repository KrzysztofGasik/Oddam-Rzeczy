import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      success: false
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
      this.state.email != "" &&
      this.state.message != ""
    ) {
      this.setState({
        success: true,
        name: "",
        email: "",
        message: ""
      },()=> {
        this.timer = setTimeout(() => {
          this.setState({
            success: false
          });
        }, 5000);
      });
    }
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <footer id="Footer">
        <form className="footer__wrapper">
          <span>Skontaktuj się z nami</span>
          <img src="../img/decoration.png" />
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
            <input type="submit" value="Wyślij" onClick={this.ValidateSubmit}/>
          </div>
          {this.state.success ? <span style={{color: 'red'}}>Formularz wysłany, dzięki</span> : <p>Uzupełnij formularz</p>}
        </form>
      </footer>
    );
  }
}

export { Footer };
