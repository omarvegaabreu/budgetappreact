//filters text actions functions
export const setTextFilter = (text = "") => ({
  type: "FILTER_TEXT",
  text
});
//sort by date function
export const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//sort by amount
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//sort by start date
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});
