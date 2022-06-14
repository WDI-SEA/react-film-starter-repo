const Fave = ({ onFaveToggle, isFave }) => {
  const handleClick = e => {
    console.log('handling fave click')
    e.stopPropagation()
    onFaveToggle()
  }
  const action = isFave ? 'remove_from_queue' : 'add_to_queue'

  return (
    <div onClick={handleClick} className={`film-row-fave ${action}`}>
      <p className='material-icons'>{action}</p>
    </div>
  )
}

export default Fave
