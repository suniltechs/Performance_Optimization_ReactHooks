import React from 'react'
import UseMemoHook from './UseMemoHook'
import UseCallbackHook from './UseCallbackHook'
import UseReducerHook from './UseReducerHook'
import UseLayoutEffectHook from './UseLayoutEffectHook'
import NavBar from './NavBar'

const App = () => {
  return (
    <div className="app-container">
      <UseMemoHook />
      <UseCallbackHook />
      <UseReducerHook />
      <UseLayoutEffectHook />
      <NavBar />
    </div>
  )
}

export default App
