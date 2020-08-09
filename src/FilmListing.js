import React, { Component } from 'react';
import FilmRow from './FilmRow'

class FilmListing extends Component {
    constructor(props) {
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this)
        this.handleFaveToggle = this.handleFaveToggle.bind(this)
        this.state = {
            filter: 'all',
            faves: [

            ]
        }
    }
    handleFilterClick(filter) {
        this.setState((state,props) => {
            return{filter: filter}
        })
    }
    handleFaveToggle(film) {
        let newFaves = [...this.state.faves];
        const filmIndex = newFaves.indexOf(film);
        if (filmIndex < 0) {
          console.log(`ADDING ${film.title} TO FAVES`)
          newFaves = [...newFaves, film];
        } else {
          console.log(`REMOVING ${film.title} TO FAVES`)
          newFaves.splice(filmIndex, 1)
        }
        this.setState((state, props) => {
            return{faves: newFaves}
        });
    }
    render() {
    const allFilms = this.props.films.map((film, i) => {
        return (
            <FilmRow 
            film={film.title} 
            key={`filmRow-${i}`}
            poster={film.poster_path} 
            year={film.release_date} 
            onFaveToggle={this.handleFaveToggle}
            isFave={this.state.faves.includes(film)} 
            />
        )
    }) 
    return (
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <div className="film-list-filters">
              <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => {
                this.handleFilterClick("all")
              }}>
                ALL
                <span className="section-count">{this.props.films.length}</span>
              </div>
              <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{
                this.handleFilterClick("faves")
              }}>
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