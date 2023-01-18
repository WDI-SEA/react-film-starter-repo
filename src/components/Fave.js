import { useState } from "react"

export default function Fave(props) {

    //fave handler function
    function handleFave(e) {
        e.stopPropagation()
        console.log('handling fave')
        //calls a function higher up the tree
        props.onFaveToggle()
    }
        const action = props.isFave ? 'remove_from_queue' : 'add_to_queue'
        return (
            <>
                <div className={`film-row-fave ${action}`} onClick={
                    handleFave}>
                    <p className="material-icons">add_to_queue</p>
                </div>
            </>
        )
}