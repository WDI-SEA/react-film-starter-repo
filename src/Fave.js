

export default function Fave(props) {
    // const [isFave, setIsFave] = useState(false)


    // let handleClick = e => {
    //     e.stopPropagation()
    //    setIsFave(!isFave)
           
    // }

    const handleClick = e => {
        e.stopPropagation()
        console.log('Handling Fave click!')
        
        props.onFaveToggle()
    }
    
        const action = props.isFave ? "remove_from_queue" : "add_to_queue"
        return (
            <div 
                className={`film-row-fave ${action}`}
                onClick={handleClick}
            >
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
