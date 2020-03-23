"use strict";

//react
import React from "react";
import ReactDOM from "react-dom";
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

console.log(store.getState());

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: "Water bill" }));
const expenseTwo = store.dispatch(addExpense({ description: "Gas bill" }));

store.dispatch(setTextFilter("bill"));
store.dispatch(setTextFilter("water"));

ReactDOM.render(<AppRouter />, document.getElementById("app"));
