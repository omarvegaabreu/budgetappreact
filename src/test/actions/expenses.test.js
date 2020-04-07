import configureStore from "redux-mock-store"; //ES6 modules;
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  removeExpense,
  editExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

const createMockStore = configureStore([thunk]);

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

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "This one is better",
    createdAt: 1000,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });

      return database.ref(`expense/${actions[0].expense.id}`).once("value");
    })
    .then((snapShot) => {
      expect(snapShot.val()).toEqual(expenseData);
      done();
    })
    .catch((e) => {
      console.log(`ERROR:${e}`);
    });
});

test("should default values expense to database and store", (done) => {
  const store = createMockStore({});
  const defaultExpenseVal = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0,
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...defaultExpenseVal,
        },
      });

      return database.ref(`expense/${actions[0].expense.id}`).once("value");
    })
    .then((snapShot) => {
      expect(snapShot.val()).toEqual(defaultExpenseVal);
      done();
    })
    .catch((e) => {
      console.log(`ERROR:${e}`);
    });
});

// test("should add expense to database and redux store", (done) => {
//   const store = createMockStore({});
//   const expenseData = {
//     description: "Mouse",
//     amount: 3000,
//     note: "this is good",
//     createdAt: 1000,
//   };
//   return store.dispatch(startAddExpense(expenseData)).then(() => {
//     expect(1).toBe(1);
//     done();
//   });
// });

// test("should add expense default values to database and redux store", () => {});

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
