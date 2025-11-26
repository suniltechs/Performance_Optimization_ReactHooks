import React from 'react'
import Button from './Button'
import withCounter from './withCounter'

const Hoc = () => {

    const MyButton = withCounter(Button)


  return (
    <div className="app-container">
      <MyButton label='Enhanced Button' />
      <Button label='Normal Button'/>
    </div>
  )
}

export default Hoc