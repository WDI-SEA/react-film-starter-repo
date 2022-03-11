import React, { Component } from 'react';
import FilmRow from './FilmRow'


class FilmList extends Component {
    state = {
        filter: 'all'
    }

    handleFilterClick = (filter) => {
        // e.preventDefault()
        console.log(filter)
        this.setState({
            filter: filter
        })
    }

    render() { 
        const allFilms = this.props.films.map((film, index) => {
            return (
                <FilmRow 
                    key={`filmitem=${index}`} 
                    film={film}
                />
            )
        })
        return (
            <>
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    <div className="film-list-filters">
                        <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => {
                            this.handleFilterClick("all")
                        }}>
                            ALL
                            <span className="section-count">{this.props.films.length}</span>
                        </div>
                        {/* can also do this and give the div an id and use event.target.id */}
                        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{
                            this.handleFilterClick("faves")
                        }}>                            
                            FAVES
                            <span className="section-count">0</span>
                        </div>
                    </div>

                    {allFilms}
                </div>
            </>
        );
    }
}
 
export default FilmList;