export default function Fave(props) {

        const action = props.fave ? "remove_from_queue" : "add_to_queue"
        return(
            <div className={`film-row-fave ${action}`}
            onClick={props.handleFaveClick}
            >
                <p className="material-icons">add_to_queue</p>
            </div>
        )
}