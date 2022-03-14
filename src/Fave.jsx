export default function Fave(props) {
  const handleClick = (e) => {
    e.stopPropagation();
    // Add this line. You'll call the function passed through props
    props.onFaveToggle();

    // Delete the `setIsFaves` line. You no longer track state here
    // setIsFave(!isFave)
  };
  return (
    <div
      onClick={handleClick}
      className={`film-row-fave ${
        props.isFaves === true ? "remove_from_queue" : "add_to_queue"
      }`}
    >
      <p className="material-icons">{`${
        props.isFaves === true ? "remove_from_queue" : "add_to_queue"
      }`}</p>
    </div>
  );
}
