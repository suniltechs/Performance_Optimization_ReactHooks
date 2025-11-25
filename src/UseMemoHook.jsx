import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {

    const [number, setNumber] = useState(0)

    const doubleNumber = useMemo(() => {
        // console.log('Calculating...')
        return number * number
    }, [number])

  return (
    <div className="usememo-container">
      <div className="usememo-card">
        <h4>useMemo Hook</h4>
        <form>
          <input 
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)} 
          />

          <h3>Squared Value : {doubleNumber}</h3>
        </form>

      </div>
    </div>
  )
}

export default UseMemoHook
