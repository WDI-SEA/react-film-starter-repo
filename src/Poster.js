import React, { Component } from 'react';


class Poster extends Component {
    state = {  } 
    render() {
        let posterUrl = `https://image.tmdb.org/t/p/w780/${this.props.poster_path}` 
        return (
          
            <img src={posterUrl} alt=''/>
    
        );
    }
}
 
export default Poster;