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
  const text = "test";

  const action = {
    type: "SET_TEXT_FILTER",
    text
  };
  const state = filtersReducers(undefined, action);
  expect(state.text).toBe(text);
});

test("should sort state by amount", () => {
  const sortBy = "amount";

  const action = {
    type: "SORT_BY_AMOUNT",
    sortBy
  };

  const state = filtersReducers(undefined, action);

  expect(state.sortBy).toBe("amount");
});

test("should sort by date", () => {
  const sortBy = "date";

  const action = {
    type: "SORT_BY_DATE",
    sortBy
  };

  const state = filtersReducers(undefined, action);

  expect(state.sortBy).toBe("date");
});

test("should set start date", () => {
  const startDate = moment(0);

  const action = {
    type: "SET_START_DATE",
    startDate
  };

  const state = filtersReducers(undefined, action);

  expect(state.startDate).toEqual(moment(0));
});

test("should set END date", () => {
  const endDate = moment(1);
  const action = {
    type: "SET_END_DATE",
    endDate
  };

  const state = filtersReducers(undefined, action);

  expect(state.endDate).toEqual(moment(1));
});
