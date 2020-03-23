import { redux, combineReducers, createStore } from "redux";
import { uuid } from "uuidv4";

//expenses action generators functions
//adds expenses
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//removes expenses from app object
const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
});

//edits expenses from app object
const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});

//expenses reducers default values
const expensesReducersDefault = {
  description: "description default",
  note: "note default",
  amount: 0,
  createdAt: 0
};

//expenses reducer function
const expensesReducers = (state = expensesReducersDefault, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];

    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);

    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update
          };
        } else {
          return state;
        }
      });
    default:
      return state;
  }
};

//filters action default value

const filtersReducersDefault = {
  text: "",
  sortBy: "date", // or date,
  startDate: undefined,
  endDate: undefined
};

//filters action generator functions

//filters text actions functions
const setTextFilter = (text = "") => ({
  type: "FILTER_TEXT",
  text
});
//sort by date function
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

//sort by amount
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

//sort by start date
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

//filters reducers function
const filtersReducers = (state = filtersReducersDefault, action) => {
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

//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//redux store
const store = createStore(
  combineReducers({
    expenses: expensesReducers,
    filters: filtersReducers
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 1, createdAt: 1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 300, createdAt: -551000 })
);

// expenses reducers store
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5555555 }));

// filters reducers call
// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

// sort reducers calls
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(2000));

//initial app object
const demoStore = {
  expenses: [
    {
      id: "",
      description: "expense description",
      note: "this is the note for the payment.",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "school",
    sortBy: "amount", // or date,
    startDate: undefined,
    endDate: undefined
  }
};
