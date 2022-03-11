import { Component } from 'react'

export default class Fave extends Component {
    state = {
        isFave: false
    }
    handleClick = (e) => {
        console.log(`handling Fave click!`)
        e.stopPropagation()
        this.setState((prevState) => {
            // braces to match state format
            return {isFave: !prevState.isFave}
        }, () => console.log(this.state.isFave))
    }
    
    render() {
        const action = this.state.isFave ?'remove_from_queue' : 'add_to_queue'
        return (
            <div className={`film-row-fave ${action}`} onClick={this.handleClick}>
                <p className="material-icons">{action}</p>
            </div>
        )
    }
}