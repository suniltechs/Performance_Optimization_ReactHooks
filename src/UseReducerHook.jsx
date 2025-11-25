import React, { useReducer } from 'react'

const ACTION = {
  INCREMENT: 'ACTION.INCREMENT',
  DECREMENT: 'ACTION.DECREMENT',
  RESET: 'ACTION.RESET'
}

function reducerFn(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 }
    case ACTION.DECREMENT:
      return { count: state.count - 1 }
    case ACTION.RESET:
      return { count: 0 }
    default:
      return state
  }
}

const UseReducerHook = () => {

  const [state, dispatch] = useReducer(reducerFn, { count: 1 })

  return (
    <div className="usereducer-container">
      <div className="usereducer-card">
        <h4>useReducer Hook</h4>
        
        <h1>{state.count}</h1>

        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTION.RESET })}>Reset</button>

      </div>
    </div>
  )
}

export default UseReducerHook
