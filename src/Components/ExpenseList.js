import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses-selectors";

//export for test
export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expenses found</p>
    ) : (
      props.expenses.map(expense => {
        return <ExpenseListItem key={expense.id} {...expense} />;
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

//default export to connect redux
export default connect(mapStateToProps)(ExpenseList);
