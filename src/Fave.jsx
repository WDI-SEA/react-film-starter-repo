export default function Fave(props) {
  const { onClick, setCurrentFilm, action = 'add_to_queue' } = props;
  const handleClick = (e) => {
    e.stopPropagation();
    console.log('Handling Fave click!');
    props.onFaveToggle();
  };

  return (
    <div
      className={`film-row-fave ${props.isFave ? 'is-fave' : ''}`}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick(e);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <p className="material-icons">{action}</p>
    </div>
  );
}
