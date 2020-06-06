import React, { Component } from "react";
import ReactDOM from "react-dom";
import products from "./data/products";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [products],
    };
  }
  render() {
    return (
      <div>
        <Products />
        <Cart />
      </div>
    );
  }
}

class Products extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Produkty</h2>
        <ul key="id">
          <li>
            {this.state.props.arr}{" "}
            <button className="btn btn-primary">Kup!</button>
          </li>
          <li>
            {this.state.props.arr}{" "}
            <button className="btn btn-primary">Kup!</button>
          </li>
          <li>
            {this.state.props.arr}{" "}
            <button className="btn btn-primary">Kup!</button>
          </li>
          <li>
            {this.state.props.arr}{" "}
            <button className="btn btn-primary">Kup!</button>
          </li>
          <li>
            {this.state.props.arr}{" "}
            <button className="btn btn-primary">Kup!</button>
          </li>
        </ul>
      </div>
    );
  }
}

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Koszyk</h2>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <Products />
      <Shop />
    </>
  );
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById("app"));
// export { App, Shop, Products, Cart };
