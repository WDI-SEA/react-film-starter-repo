export default function Fave(props) {

    const handleClick = e => {
        e.stopPropagation()
        console.log('Handling Fave click!')
        console.log(e.target.dataset.taco)
        props.onFaveToggle()

    }
    const action = props.fave ? "remove_from_queue" : "add_to_queue"
    return (
        <div className={`film-row-fave ${action}`}
            onClick={handleClick}
        >
            <p className="material-icons" data-taco={props.film}>add_to_queue</p>
        </div>
    )
}