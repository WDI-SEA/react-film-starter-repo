import React, {Component} from 'react'

class FilmPoster extends Component{
    render(){
        // let poster_path=`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`

        return(
            <>
                <img alt={this.props.alt}/>
            </>
        )
    }

}

export default FilmPoster