import React from 'react'

export default function Child(props) {
  return (
    <div>
        <button onClick={props.handleClick}>click me</button>
    </div>
  )
}
