import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("should set up remove expense action object", () => {
  const removeExpenseTest = removeExpense({ id: "abc123" });
  expect(removeExpenseTest).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abc123"
  });
});

test("should set up edit expense action", () => {
  const editExpenseTest = editExpense("abc123", "abc123");
  expect(editExpenseTest).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: "abc123"
  });
});

test("should set up add expense action object", () => {
  const expensesData = {
    id: "abc123",
    description: "description",
    note: "note",
    amount: 0,
    createdAt: 0
  };

  const addExpenseTest = addExpense(expensesData);
  expect(addExpenseTest).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expensesData,
      id: expect.any(String)
    }
  });
});

//testing default values on add expense
test("should set up add expense action object", () => {
  const addExpenseTest = addExpense();
  expect(addExpenseTest).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
