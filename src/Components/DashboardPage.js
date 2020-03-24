import React from "react";

//components
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const DashboardPage = props => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default DashboardPage;
