import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter.js";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses-selectors";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
//react dates
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";

const store = configureStore();
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log("thank you for viewing my app");

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
