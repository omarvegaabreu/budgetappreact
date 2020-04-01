import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../Components/AddExpensePage";
import expenses from "../fixtures/expenses";

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
});

test("should render add expense page", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should pass data to onsubmit props ", () => {
  const addExpense = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(
    <AddExpensePage addExpense={addExpense} history={history} />
  );
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});
