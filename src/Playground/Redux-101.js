import { createStore } from 'redux'

const increaseCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const reset = ({ reset = 0 } = {}) => ({
  type: 'RESET',
  reset
})




const set = ({ set = 143 } = {}) => ({
  type: 'SET',
  set
})


const store = createStore((state = { count: 0 }, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.incrementBy }
      break;
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return { count: state.count - action.decrementBy }
      break;
    case 'RESET':
      return { count: action.reset }
      break;
    case 'SET':
      return { count: action.set }

    default:
      return state
  }

})

const unsusbcribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(increaseCount({ incrementBy: 5 }))

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(decrementCount())

store.dispatch(reset({ reset: 0 }))

store.dispatch(set({ set: 100 }))






