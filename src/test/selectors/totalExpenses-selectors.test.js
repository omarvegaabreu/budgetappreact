import selectExpensesTotal from "../../selectors/totalExpenses-selectors";
import expenses from "../fixtures/expenses";

test("should return 0 if value is not provided", () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test("should add a single expense", () => {
  const res = selectExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test("should add multiple expenses", () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(19990);
});
