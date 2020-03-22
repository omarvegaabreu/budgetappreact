import { redux, combineReducers, createStore } from 'redux';
import { uuid } from 'uuidv4';


//expenses action generators
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  }
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }

})

const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
})


//expences reducers default values
const expensesReducersDefault = { description: 'description default', note: 'note default', amount: 0, createdAt: 0 }

//expenses reducer function
const expensesReducers = (state = expensesReducersDefault, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense]

    case "REMOVE_EXPENSE":

      return state.filter(({ id }) => id !== action.id)

    default:
      return state
  }
}

//filters reducers default value

const filtersReducersDefault = {
  text: '',
  sortBy: 'date',// or date,
  startDate: undefined,
  endDate: undefined
}


//filters reducers function
const filtersReducers = (state = filtersReducersDefault, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

//redux store
const store = createStore(
  combineReducers({
    expenses: expensesReducers,
    filters: filtersReducers

  })
);

store.subscribe(() => {
  console.log(store.getState())
})


const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 188000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300 }))


store.dispatch(removeExpense({ id: expenseOne.expense.id }))




//initial app object
const demoStore = {
  expenses: [{
    id: '',
    description: 'expense description',
    note: 'this is the note for the payment.',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',// or date,
    startDate: undefined,
    endDate: undefined
  }

}

