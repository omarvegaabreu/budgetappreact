//expenses reducers default values
// const expensesReducersDefault = {
//   description: "description default",
//   note: "note default",
//   amount: 0,
//   createdAt: 0
// };

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

const expensesReducersDefault = [];

//expenses reducer function
export default (state = expensesReducersDefault, action) => {
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
