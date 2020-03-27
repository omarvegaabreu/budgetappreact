import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//actions
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({ dispatch, id, amount, description, createdAt }) => (
  <div>
    <Link to={`/edit/:${id}`}>
      <h3>{description}</h3>
    </Link>

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
