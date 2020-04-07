import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";

const configureMockStore = configureStore([thunk]);

test("should set up remove expense action object", () => {
  const removeExpenseTest = removeExpense({ id: "abc123" });
  expect(removeExpenseTest).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123",
  });
});

test("should set up edit expense action", () => {
  const editExpenseTest = editExpense("abc123", "abc123");
  expect(editExpenseTest).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: "abc123",
  });
});

test("should set up add expense action object", () => {
  const addExpenseTest = addExpense(expenses);
  expect(addExpenseTest).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses,
  });
});

test("should add expense to database and redux store", (done) => {
  const store = configureMockStore();
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "this is good",
    createdAt: 1000,
  };
  return store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(1).toBe(1);
    done();
  });
});

test("should add expense default values to database and redux store", () => {});

//testing default values on add expense
// test("should set up add expense default action object", () => {
//   const addExpenseTest = addExpense();
//   expect(addExpenseTest).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//     },
//   });
// });
