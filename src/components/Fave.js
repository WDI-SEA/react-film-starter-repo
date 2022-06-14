// export default class Fave extends Component {
//   handleClick = (e) => {
//     console.log("handling fave click!");

// }
const Fave = (props) => {
  handleClick = (e) => {
    e.stopPropagation();
    console.log("handling fave click!");
    props.onFaveToggle();
  };
  return (
    <>
      <div onClick={handleClick} className="film-row-fave add_to_queue">
        <p className="material-icons">add_to_queue</p>
      </div>
    </>
  );
};

export default Fave;
