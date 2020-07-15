import React, { Component } from 'react';
import TMDB from "./TMDB.js";
import FilmRow from "./FilmRow.jsx";

class FilmListing extends Component {
    constructor(){
        super();
        this.state = {
            filter: "all"
        }
        this.handleFilterClick = (filter) => {
            this.setState({filter: filter});
        }
    }
    render() {
        const allFilms = TMDB.films.map((film, i) => {
            return (
                <FilmRow film={film} key={`filmRow-${i}`}/>
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div 
                        className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`}
                        onClick={() => this.handleFilterClick("all")}
                    >
                        ALL
                        <span className="section-count">{allFilms.length}</span>
                    </div>
                    <div 
                        className={`film-list-filter ${this.state.filter === "faves" ? "is-active": ""}`}
                        onClick={() => this.handleFilterClick("faves")}
                    >
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>
                {allFilms}
            </div>
        );
    }
}

export default FilmListing;