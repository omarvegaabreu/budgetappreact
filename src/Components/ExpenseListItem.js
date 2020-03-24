import React from "react";
import { connect } from "react-redux";
//actions
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ dispatch, id, amount, description, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {amount}-{createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      delete
    </button>
  </div>
);

const mapToStateProps = state => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapToStateProps)(ExpenseListItem);
