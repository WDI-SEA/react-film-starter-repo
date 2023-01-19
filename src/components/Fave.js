
export default function Fave(props) {
    const action = props.isFave ? 'remove_from_queue' : 'add_to_queue'
    return (
        <>
            <div 
            className={`film-row-fave ${action}`} 
            onClick={(e) => {props.handleFave(e, props.film)}}>
                <p className="material-icons">add_to_queue</p>
            </div>
        </>
    )
}