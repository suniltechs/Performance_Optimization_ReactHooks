import React from 'react'
import UseMemoHook from './UseMemoHook'
import UseCallbackHook from './UseCallbackHook'
import UseReducerHook from './UseReducerHook'
import UseLayoutEffectHook from './UseLayoutEffectHook'
import ClassBasedComponent from './ClassBasedComponent'
import FunctionalComponent from './FunctionalComponent'


const App = () => {
  return (
    <div className="app-container">
      <UseMemoHook />
      <UseCallbackHook />
      <UseReducerHook />
      <UseLayoutEffectHook />
      <ClassBasedComponent />
      <FunctionalComponent />
    </div>
  )
}

export default App
