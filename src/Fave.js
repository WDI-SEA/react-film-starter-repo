import { useState } from "react";

function Fave() {
    const [isFave, setIsFave] = useState(false);
    const handleClick = e => {
        e.stopPropagation();
        setIsFave(!isFave);
    }
    const action = isFave ? "remove_from_queue" : "add_to_queue";
    return (
        <div className={`film-row-fave ${action}`} onClick={e => handleClick(e)}>
            <p className="material-icons">{action}</p>
        </div>
    );
}

export default Fave;
