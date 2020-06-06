import React, { Component } from "react";
import ReactDOM from "react-dom";

class LoadingData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "0%",
      txt: "",
    };
  }
  componentDidMount() {
    this.timeOut = setTimeout(() => {
      this.setState({
        width: "100%",
        txt: "Dane załadowane!",
      });
    }, 5000);
  }

  componentWillUnmount() {
    e.preventDefault();
  }

  render() {
    return;
    <div className="progress">
      <div>
        className="progress-bar" style={{ width: "300px", height: "100px" }}
      </div>
      ;<h1>{this.state.txt}</h1>
    </div>;
  }
}

function App() {
  return <LoadingData />;
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById("app"));
export { App, LoadingData };
