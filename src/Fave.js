import React, {Component} from 'react';

class Fave extends Component{
    state={
        isFav: false
    }
    handleClicker=(e)=>{
        e.stopPropagation();
        console.log('Clicked');
        this.setState({
            isFav: !this.state.isFav
        })
    }
    
    render(){
        
        

        return(
            <div className={`film-row-fave ${this.state.isFav ? 'remove_from_queue':'add_to_queue'}`} onClick={this.handleClicker}>
                <p className="material-icons">add_to_queue</p>
            </div>
        )
    }
}

export default Fave;