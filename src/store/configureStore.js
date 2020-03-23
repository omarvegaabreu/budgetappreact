//external dependencies
import { createStore, combineReducers } from "redux";

//reducers import
import expensesReducers from "../reducers/expenses-reducers";
import filtersReducers from "../reducers/filters-reducers";

export default () => {
  //store creation

  const store = createStore(
    combineReducers({
      expenses: expensesReducers,
      filters: filtersReducers
    })
  );
  return store;
};
