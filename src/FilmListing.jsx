import React, { Component } from 'react';
import FilmRow from "./FilmRow"

class FilmListings extends Component {
    constructor() {
        super()
        this.state = {
            filter: "all"
        }
    }


    handleFilterClick = (filter) => {
        this.setState({ filter: filter })
        
    }
    render() {
        const allFilms = this.props.films.map((film, i) => {
            return (
                <FilmRow film={film} key={`filmRow-${i}`} />
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filter">
                    <div onClick={() => this.handleFilterClick('all')} className={`film-list-filter ${this.state.filter === "all"? "is-active" : ""}`}>
                        ALL
                    <span className="section-count">{this.props.films.length}</span>
                    </div>
                    
                    <div onClick={() => this.handleFilterClick('faves')} 
                    className={`film-list-filter ${this.state.filter === "faves"? "is-active" : ""}`}>
                        FAVES
                    <span className="section-count">0</span>
                    </div>
                    
                </div>

                <h1>{allFilms}</h1>
            </div>
        );
    }
}

export default FilmListings;