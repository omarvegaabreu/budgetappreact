import React from "react";
import { connect } from "react-redux";
//components
import ExpenseListForm from "./EditExpenseForm";

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      {props.match.params.id}
      <ExpenseListForm />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log(state.expenses);
  // console.log(props);
  return {
    expenses: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);
