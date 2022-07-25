import React, {Component} from 'react'

class Poster extends Component {
    render() {
        return (
            <img src={this.props.posterUrl} alt="{this.props.film.title} poster" />
        )
    }
}

export default Poster