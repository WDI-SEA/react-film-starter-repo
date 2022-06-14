export default function Fav(props) {
    // const [isFave, setFave] = useState(false)
    const handleClick = () => {
        props.onFaveToggle()
    }
    return (
        <div
            onClick={(e) => {
                e.stopPropagation()
                handleClick()
            }}
            className={`film-row-fave ${props.isFave ? 'remove_from_queue' : 'add_to_queue'}`}
        >
            <p className="material-icons">{props.isFave ? 'remove_from_queue' : 'add_to_queue'}</p>
        </div>
    )
}

