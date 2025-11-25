import React, { useState } from 'react'

const FunctionalComponent = () => {

    const [no1, setNo1] = useState(1)
    const [no2, setNo2] = useState(100)

    const handleClick1 = () => {
        setNo1(prev => prev + 1)
    }

    const handleClick2 = () => {
        setNo2(prev => prev + 1)
    }



  return (
    <div className='usecallback-container'>
        <div className='usecallback-card'>
            <h4>Functional Component</h4>
            <h2>First : {no1}</h2>
            <h2>Second : {no2}</h2>
            <button onClick={handleClick1}>Add First</button>
            <button onClick={handleClick2}>Add Sceond</button>
        </div>
    </div>
  )
}

export default FunctionalComponent