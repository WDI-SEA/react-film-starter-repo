import React, { Component } from "react";
import FilmRow from "./FilmRow";

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

    render(){
        const filmRows = this.props.films.map((film, i) => (
            <FilmRow key={i} film={film}/>
        ));
         return( 
            <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{this.props.films.length}</span>
                </div>
                <div className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('faves')}>
                FAVES
                <span className="section-count">0</span>
                </div>
            </div>
            {filmRows}
            </div>
            )
    }
}