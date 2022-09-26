import React, {Component} from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {
    render() {
        const films = this.props.films.map((movie, i) => {
            return <FilmRow key={`FilmRowKey${i}`} film={movie}/>
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                {films}  
            </div>

        )
    }
}