import React, {Component} from 'react'

class Poster extends Component {
    render(){
        return (
            
            <div className="film-row">
            <img src={this.props.film.poster_path}
                alt={this.props.film.title}/>
            </div>

        )
    }
}

export default Poster