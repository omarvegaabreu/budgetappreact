import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses-selectors";
import expensesTotal from "../selectors/expensesTotal-selectors";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "Expenses";
  const formattedExpenseTotal = numeral(expensesTotal / 100).format("$0,0.00");

  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totaling: {formattedExpenseTotal}{" "}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: expensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
