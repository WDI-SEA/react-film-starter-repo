import React, { Component } from "react"
import FilmRow from "./FilmRow"

export default class FilmList extends Component {

    state = {
        filter: 'all'
    }

    handleFilterClick = (filter) => {
        console.log("a filter was clicked: " + filter)
        this.setState({
            filter
        })
    }

    render() {
        console.log(this)
        const allFilms = this.props.films.map((film, i) => {
            return (
                <FilmRow 
                    key={`filmrow ${i}`}
                    film={film}
                />
            )
        })

        return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('all')}>
                    ALL 
                    <span className="section-count">
                        {this.props.films.length}
                    </span>
                </div>
                <div className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>
            {allFilms}
        </div>
        )
    }
}