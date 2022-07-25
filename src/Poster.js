import React, { Component } from 'react';

class Poster extends Component {
    render() {
        return (
            <>
                <img src={'https://image.tmdb.org/t/p/w780/' + this.props.url} alt={this.props.title} />
            </>
        );
    }
}

export default Poster;
