"use strict";

//react
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//Router
import AppRouter from "../src/Router/AppRouter";
//redux store
import configureStore from "../src/store/configureStore";
import { addExpense } from "../src/actions/expenses";
import { setTextFilter } from "../src/actions/filters";
import getVisibleExpenses from "../src/selectors/expenses-selectors";

//css
import "normalize.css";
import "./styles/styles.scss";

const store = configureStore();

// console.log(store.getState());

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

store.dispatch(
  addExpense({ description: "Water bill", amount: 4500, createdAt: -1 })
);
store.dispatch(addExpense({ description: "coffee", createdAt: 1 }));
store.dispatch(
  addExpense({ description: "Rent", amount: 188000, createdAt: 2000 })
);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
