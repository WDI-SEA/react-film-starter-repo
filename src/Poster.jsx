import React, { Component } from 'react';

class Poster extends Component {
    state = {  } 
    render() { 
        return (
            <img src={this.props.url} alt="movie-poster" />
        );
    }
}
 
export default Poster;