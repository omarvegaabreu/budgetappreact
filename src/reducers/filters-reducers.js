const filtersReducersDefault = {
  text: "",
  sortBy: "date", // or date,
  startDate: undefined,
  endDate: undefined
};

export default (state = filtersReducersDefault, action) => {
  switch (action.type) {
    case "FILTER_TEXT":
      return { ...state, text: action.text };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "sort by date" };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "sort by amount" };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};
