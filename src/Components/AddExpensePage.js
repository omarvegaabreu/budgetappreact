//react
import React from "react";
import { connect } from "react-redux";
//components
import EditExpenseForm from "./EditExpenseForm";
import { addExpense } from "../actions/expenses";

const AddExpensePage = props => (
  <div>
    <h1>Add Expense</h1>
    <EditExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddExpensePage);
