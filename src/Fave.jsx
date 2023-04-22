export default function Fave(props) {

    const handleClick = e => {
        e.stopPropagation()
        console.log('Handling Fave click!')
    
        // Add this line. You'll call the function passed through props
        props.onFaveToggle()
    


        // Delete the `setIsFaves` line. You no longer track state here
        // props.setIsFave(!props.isFave)
    }
        const action = props.fave ? "remove_from_queue" : "add_to_queue"
        return(
            <div className={`film-row-fave ${action}`}
            onClick={handleClick}
            >
                <p className="material-icons">add_to_queue</p>
            </div>
        )
}