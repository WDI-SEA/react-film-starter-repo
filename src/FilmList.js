import React, { Component } from 'react'
import FilmRow from './FilmRow'

class FilmList extends Component {

    state={
        faved: 'all'
    }
    
    handleFilterClick = (faved) => {
        // e.preventDefault()
        console.log('a filter was clicked')
        this.setState((prevState) => {
            return {
                faved: faved
            }
        })
    }
    
    render () {

        const allFilms = this.props.films.map((film, index) => {
            return (
                // <div className='film-row'>
                //     <h2>{film.title}</h2>
                // </div>
                <FilmRow 
                film={film}
                key={index}/>
            )
        })
        return (
            <>
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={()=>this.handleFilterClick('all')}>
                     ALL
                     <span className="section-count">{this.props.films.length}</span>
                    </div>
                        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={()=>this.handleFilterClick('faves')}>
                        FAVES
                            <span className="section-count">0</span>
                        </div>
                    </div>
                {allFilms}
            </div>
            </>
        )
    }
}

export default FilmList