import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';
class FilmRow extends React.Component {

    handleDetailsClick = film => {
        console.log(`Printing details for ${film}`)
    }

    render() {

        let releaseDate = this.props.film.release_date.substring(0, 4)

        return (
            <div className="film-row" onClick={() =>{this.handleDetailsClick('film')}}>
                <FilmPoster poster={this.props.film.poster_path} title={this.props.film.title} />


                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>{releaseDate}</p>
                </div>

             <Fave />
            </div>
        )
    }
}

export default FilmRow;