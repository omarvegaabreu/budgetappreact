import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter.js";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
// import getVisibleExpenses from "./selectors/expenses-selectors";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "./firebase/firebase";
//react dates
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
//playground
const store = configureStore();
const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log("thank you for viewing my app");

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
store
  .dispatch(startSetExpenses())
  .then(() => {
    ReactDOM.render(jsx, document.getElementById("app"));
  })
  .catch((e) => {
    console.log(`I PITTY THE FOOL WHO CAUSE THIS: ${e}`);
  });
