import React, { Component } from 'react';
import FilmRow from './FilmRow';


export default class FilmList extends Component {
    state = {
        filter: 'all'
    }

    handleFilterClick = (filter) => {
        console.log(filter)
        this.setState({
            filter: filter
        })
    }

    render() {
        const allFilms = this.props.films.map((film, index) => {
            return (  
                    <FilmRow
                        
                        //year={film.release_date}
                        key={index}
                        //poster_path={film.poster_path}
                        film={film}
                    />   
            )
            })
        return (
            <>
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    <div className="film-list-filter" onClick={()=>this.handleFilterClick('all')}>
                        <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => {
                            this.handleFilterClick("all")
                        }}>
                            ALL
                            <span className="section-count">{this.props.films.length}</span>
                        </div>
                    </div>
                    <div className="film-list-filter" onClick={()=>this.handleFilterClick('faves')}>
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
        )
    }
}