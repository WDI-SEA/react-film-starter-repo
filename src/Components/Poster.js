import React, { Component } from 'react';

class Poster extends Component {
    render() {
        return (
            <>
                <img src={this.props.url} alt={this.props.film.title} />
            </>
        );
    }
}

export default Poster
