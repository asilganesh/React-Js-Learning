import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";

const Context = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={"ganesh"}>
    <App />
  </Context.Provider>
);

export { Context };
