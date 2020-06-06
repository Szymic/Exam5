import React, { Component } from "react";
import ReactDOM from "react-dom";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    txt: "";
  }

  checkLenght = (e) => {
    this.setState({
      txt: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <input className="form-control" id="1"></input>
        <input className="form-control" type="email" id="2"></input>
        <textarea className="form-control" id="3"></textarea>
        <button className="btn btn-primary" type="submit">
          Wyślij
        </button>
      </form>
    );
  }
}

function App() {
  return (
    <>
      <ContactForm />
    </>
  );
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById("app"));
export { App, ContactForm };
