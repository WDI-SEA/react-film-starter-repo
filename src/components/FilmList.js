import React, { Component } from 'react';
import FilmRow from './FilmRow'

class FilmList extends Component {
    state = {
        filter: "all"
    }
    handleFilterClick = (value) => {
        // console.log('A Filter was clicked')
        this.setState((prevState) => {
            return {
                filter: value
            }
        })
    }
    render() {

        const allFilms = this.props.films.map((film, index) => {
            return (
                <FilmRow film={film} key={index}/>
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}  onClick={() => this.handleFilterClick('all')}>
                        ALL
                        <span className="section-count" >{this.props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${this.state.filter === 'filter' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('filter')}>
                        FAVES
                        <span className="section-count" >0</span>
                    </div>
                </div>
                {allFilms}
            </div>
        )
    }
  }
  
  export default FilmList;