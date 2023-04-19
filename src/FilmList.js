import React, {Component} from "react";
import FilmRow from './FilmRow'

export default class FilmList extends Component {
    render() {
        const allFilms = this.props.films.map((film, i) => {
            return <FilmRow film={this.props.films[i]} />
        })
        return(   
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {allFilms}
            </div>
        )
    }
}