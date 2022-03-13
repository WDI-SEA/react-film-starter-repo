import React, { Component } from 'react'
import FilmRow from './FilmRow';

class FilmList extends Component {

    state = {
        filter: "all",
        faveDisplay: []
    }

    handleFilterClick = (name) => {
        
        this.setState({
            filter: name
        }, () => console.log(this.state.filter))
    }


    render() { 
      const filmTitle = this.props.films.map((film, index) => {
          return (
              <FilmRow key={index} film={film} posterUrl={film.poster_path}/>            
          )
      })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div 
                        className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
                        onClick={() => {this.handleFilterClick("all")}}
                        
                    >
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                        
                    </div>
                    
                    <div 
                        className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
                        onClick={() => {this.handleFilterClick("faves")}}
                        
                    >
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                    
                </div>
                {filmTitle}
            </div>
        );
    }
}
 
export default FilmList;