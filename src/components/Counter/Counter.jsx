import React from 'react'
import "./Counter.css"

const Counter = (props) => {
  return (
    <div className='counter'>
        <h1>Task1</h1>
        <p>{props.counter} </p>
        <div className='btnStyle'>
        <button onClick={props.increment}>+</button>
        <button onClick={props.decriment}>-</button>
        </div>
    </div>
  )
}

export default Counter