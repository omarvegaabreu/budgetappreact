import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render 1 expense summary component", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={195} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render multiple expense summary component ", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={51} expensesTotal={654654654321} />
  );
  expect(wrapper).toMatchSnapshot();
});
