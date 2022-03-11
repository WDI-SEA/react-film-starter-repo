import { Component } from 'react'

export default class Poster extends Component {
    render() {
        return (
            <img src={this.props.url} alt={`film poster for the movie, ${this.props.title}`} />
        )
    }
}