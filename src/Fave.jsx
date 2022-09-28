
export default function Fave(props) {

    const handleClick = e => {
        e.stopPropagation()
        props.onFaveToggle()
    }


    const action = props.isFave ? 'remove_from_queue' : 'add_to_queue'
    
    return (
        <div
            className={`film-row-fave ${action}`}
            onClick={handleClick}
        >
            <p className='material-icons'>{action}</p>
        </div>
    )
}