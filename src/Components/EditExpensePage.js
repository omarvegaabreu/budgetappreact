import React from "react";
import { connect } from "react-redux";
//components
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => {
  return (
    <div>
      EditExpenseFormEditing the expense with id of {props.match.params.id}
      <ExpenseForm
        expense={props.expenses}
        onSubmit={expense => {
          props.dispatch(editExpense(props.expenses.id, expense));
          props.history.push("/");
        }}
      />
      <button
        //remove expense from edit expense page
        onClick={() => {
          props.dispatch(removeExpense({ id: props.match.params.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses.find(expense => {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);
