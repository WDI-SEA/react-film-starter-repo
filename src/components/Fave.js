// export default class Fave extends Component {
//   handleClick = (e) => {
//     console.log("handling fave click!");

// }
import { useState } from "react";
const Fave = ({}) => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

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
  );
};

export default Fave;
