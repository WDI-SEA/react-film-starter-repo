import { useState } from "react";

export default function Fave(props) {
    const isFave = props.isFave;

    const handleClick = (e) => {
        e.stopPropagation();
        props.onFaveToggle();
    };

    return (
        <div
            className={`film-row-fave ${
                props.isFave === true ? "remove_from_queue" : "add_to_queue"
            }`}
            onClick={handleClick}
        >
            <p className="material-icons App-logo">add_to_queue</p>
        </div>
    );
}
