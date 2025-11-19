import React from 'react'
import UseMemoHook from './UseMemoHook'
import UseCallbackHook from './UseCallbackHook'

const App = () => {
  return (
    <div className="app-container">
      <UseMemoHook />
      <UseCallbackHook />
    </div>
  )
}

export default App
