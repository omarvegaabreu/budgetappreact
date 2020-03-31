import moment from "moment";
import expensesReducers from "../../reducers/expenses-reducers";

//fixtures
import expenses from "../fixtures/expenses";

test("should test default expenses", () => {
  const state = expensesReducers(undefined, "type:@@INIT");

  expect(state).toEqual([]);
});

test("should remove expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };

  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove any expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };

  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    id: "132",
    amount: 425,
    createdAt: 0,
    description: "test",
    note: "test note"
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit expense", () => {
  const amount = 5555000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducers(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit expense if not found", () => {
  const amount = 5555000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "1234",
    updates: {
      amount
    }
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});
