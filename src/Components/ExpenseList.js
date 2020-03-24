import React from "react";
import { connect } from "react-redux";
//components
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses-selectors";

const ExpenseList = props => (
  <div>
    <h1>ExpenseList</h1>
    {props.expenses.map(expense => (
      <ExpenseListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const MapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(MapStateToProps)(ExpenseList);
