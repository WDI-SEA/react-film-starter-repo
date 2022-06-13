import { useState } from "react"

const Fav = () => {
  const [isFave, setIsFav] = useState(false)
  const handleClick = () => setIsFav(!isFave)

  return (
    <div
      onClick={(e) => {
        e.stopPropagation()
        handleClick()
      }}
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
