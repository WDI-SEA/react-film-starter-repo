export default function Fave(props){
    

    const handleClick = e => {
        e.stopPropagation()
        console.log('handling fave click')
        props.onFaveToggle()
    }

    return (
        <div 
        className={`film-row-fave ${props.isFave === true ? 'remove_from_queue' : 'add_to_queue'}`}
        
        onClick={handleClick}
        
        >
            <p className="material-icons">add_to_queue</p>
        </div>
    )
}
