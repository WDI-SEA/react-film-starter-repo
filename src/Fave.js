

function Fave(props) {

    const handleClick = (e) => {
        e.stopPropagation()
        console.log("handling Fave Click!")
        props.handleFaveToggle()
    }

        return (
            <div className={`film-row-fave ${props.isFave ? "remove_from_queue" : "add_to_queue"}`}>
                <p className="material-icons"
                   onClick={handleClick} 
                >
                    add_to_queue
                    remove_from_queue
                </p>
            </div>
        )
    
}

export default Fave