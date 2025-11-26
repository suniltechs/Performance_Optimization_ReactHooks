import React from 'react'

const Button = ({label, count, handleClick }) => {
  return (
    <div className='usecallback-container'>
        <div className='usecallback-card'>

            <h4>{label}</h4>
            <button onClick={handleClick}>
                Clicked {count} times
            </button>
        </div>
    </div>
  )
}

export default Button