import React from 'react'
import UseMemoHook from './UseMemoHook'
import UseCallbackHook from './UseCallbackHook'
import UseReducerHook from './UseReducerHook'

const App = () => {
  return (
    <div className="app-container">
      <UseMemoHook />
      <UseCallbackHook />
      <UseReducerHook />
    </div>
  )
}

export default App
