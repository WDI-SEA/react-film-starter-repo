import React, { Component } from 'react';
import FilmRow from './FilmRow'


class FilmList extends Component {
    state = {
        filter: 'all'
    }
    
    handleFilterClick = filter => {
        console.log(filter)
        this.setState({filter})
    }
    render() {
        //object destructuring so dont have to keep saying this.props
        const { films } = this.props

        const allFilms = films.map(film => {
            return (
                <FilmRow key={film.id} film={film} />
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div 
                    onClick={()=>this.handleFilterClick('all')}
                    className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}>
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    <div
                    onClick={()=>this.handleFilterClick('faves')}
                    className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>

                {allFilms}
            </div>
        );
    }
}

export default FilmList;