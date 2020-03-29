import moment from "moment";

import filtersReducers from "../../reducers/filters-reducers";

test("should set up default values to state reducers", () => {
  const state = filtersReducers(undefined, "type:@@INIT");
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set text filter", () => {
  const currentState = {
    text: "test",
    sortBy: "",
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: "@@INIT" };
  const state = filtersReducers(currentState, action);
  expect(state.text).toBe("test");
});

test("should sort state by amount", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const action = { type: "SORT_BY_AMOUNT" };

  const state = filtersReducers(currentState, action);

  expect(state.sortBy).toBe("amount");
});

test("should sort by date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };

  const action = { type: "SORT_BY_DATE" };

  const state = filtersReducers(currentState, action);

  expect(state.sortBy).toBe("date");
});

test("should set start date", () => {
  const currentState = {
    text: "",
    startDate: moment(0),
    endDate: undefined,
    sortBy: "amount"
  };

  const action = { type: "@@INIT" };

  const state = filtersReducers(currentState, action);

  expect(state.startDate).toEqual(moment(0));
});

test("should set END date", () => {
  const currentState = {
    text: "",
    startDate: moment(0),
    endDate: moment(1),
    sortBy: "amount"
  };

  const action = { type: "@@INIT" };

  const state = filtersReducers(currentState, action);

  expect(state.startDate).toEqual(moment(0));
});
