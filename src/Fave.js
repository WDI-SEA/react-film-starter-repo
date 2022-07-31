import React, { Component } from 'react';



class Fave extends Component {

    state= {
        isFave:false
    }



    render() {

        const action = this.state.isFave ? 'remove_from_queue':'add_to_queue' 

        const handleClick = (e) => {
            e.stopPropagation()
            this.setState((prevState)=>{ return {isFave: !prevState.isFave} })    // this is working
        }





        return (

            <>
            <div className="film-row-fave add_to_queue">
                <p className="material-icons" onClick={handleClick}>add_to_queue</p>
            </div>
            </>

        )
    }
}

export default Fave;