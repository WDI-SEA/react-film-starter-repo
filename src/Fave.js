import { useState } from 'react'
import React from 'react'

export default function Fave(props) {
  // States
  // Necessary Variables
  const action = props.isFave ? 'remove_from_queue' : 'add_to_queue'

  // Handlers
  const handleClick = (e) => {
    e.stopPropagation()

    props.onFaveToggle()
  }

  // Output
  return (
    <div
      className={`film-row-fave ${action}`}
      onClick={handleClick}
    >
      <p className="material-icons">add_to_queue</p>
    </div>
  )
}