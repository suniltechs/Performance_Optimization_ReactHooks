import React, { useState } from 'react'

const withCounter = (WrappedComponent) => {
  return (props) => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <WrappedComponent
        count = {count}
        handleClick = {handleClick}
        {...props}
        />
    )
  }
    
}

export default withCounter