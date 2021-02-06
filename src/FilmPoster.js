import React from 'react';

class FilmPoster extends React.Component{
    render(){
        return(
            <img src={`https://image.tmdb.org/t/p/w780/${this.props.poster}`} alt={`${this.props.title} movie poster`} />
        )
    }
}

export default FilmPoster; 