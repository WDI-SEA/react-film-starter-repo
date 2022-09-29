

export default function Fave(props) {

    const handleClick = e => {
        e.stopPropagation()
        console.log("handleClick")
        props.onFaveToggle()
    }

    return (
        <div onClick={handleClick} className={`film-row-fave ${props.isFave ? 'remove_from_queue' : 'add_to_queue'}`}>
            <p className="material-icons">{`${props.isFave ? 'remove_from_queue' : 'add_to_queue'}`}</p>
        </div>
    )

}