import React from "react";
import ReactDOM from "react-dom";

function UserCard(props) {
  return (
    <div className="card">
      <div>
        <h5>
          {props.name} {props.surname}
        </h5>
        <div>{props.address}</div>
        <div>
          {props.pc} {props.city}
        </div>
      </div>
      <div className="alert alert-danger">Dane są nieprawidłowe!</div>
    </div>
  );
}

function App(props) {
  return (
    <UserCard
      name="Zdzich"
      surname="Zdzichowski"
      address="Mickiewicza 148"
      pc="44-100"
      city="Gliwice"
    />
  );
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById("app"));
export { App, UserCard };
