import { useState } from "react"

const Fav = ({ isFave, onFaveToggle }) => {
  const handleClick = (e) => {
    e.stopPropagation()
    console.log("Handling fave click!")
    onFaveToggle()
  }

  return (
    <div
      onClick={handleClick}
      className={`film-row-fave ${
        isFave ? "remove_from_queue" : "add_to_queue"
      }`}
    >
      <p className="material-icons">
        {isFave ? "remove_from_queue" : "add_to_queue"}
      </p>
    </div>
  )
}

export default Fav
