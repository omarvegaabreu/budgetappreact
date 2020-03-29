import moment from "moment";
//import actions
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../../actions/filters";

test("should filter by text", () => {
  const textFilterText = setTextFilter("test1");
  expect(textFilterText).toEqual({
    type: "SET_TEXT_FILTER",
    text: "test1"
  });
});

//set text filter default value test
test("should filter by text", () => {
  const textFilterText = setTextFilter();
  expect(textFilterText).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should sort by date", () => {
  const sortByDateTest = sortByDate();
  expect(sortByDateTest).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("should sort filters object by amount", () => {
  const sortByAmountTest = sortByAmount();
  expect(sortByAmountTest).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("should set start date to filters object", () => {
  const setStartDateTest = setStartDate(moment(0));
  expect(setStartDateTest).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("should add end date to filters object", () => {
  const setEndDateTest = setEndDate(moment(0));
  expect(setEndDateTest).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});
