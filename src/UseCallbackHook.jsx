import React, { useCallback, useState } from 'react'

const UseCallbackHook = () => {

  const [count, setCount] = useState(0)

  const increament = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const decreament = useCallback(() => {
    setCount(prev => prev - 1)
  }, [])

  return (
    <div className="usecallback-container">
      <div className="usecallback-card">

        <h1>{count}</h1>

        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>

      </div>
    </div>
  )
}

export default UseCallbackHook
