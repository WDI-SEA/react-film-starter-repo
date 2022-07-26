import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmList extends Component {
    render () {

        const handleFilterClick = (e) => {
            e.preventDefault()
            console.log("a filter was clicked")
        }
        const allFilms = this.props.films.map((film, index) => {
            return ( 
                <FilmRow film= {film}
                         key = {index}
                />
                
                // <div className="film-row">
                //     <h1>{film.title}</h1>  
                // </div>
            )
        })

        return (
            // <>
            //     <div className="film-list">
            //     <h1 className="section-title">FILMS</h1>
            //     {/* <h1>{this.props.films[0].title}</h1> */}
            //     {allFilms}
            //     </div>
            // </>

            <div className="film-list">
             <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
              <div className="film-list-filter" onClick={()=>this.handleFilterClick("all")}>
               ALL
            <span className="section-count">{this.props.films.length}</span>
             </div>
              <div className="film-list-filter" onClick={()=>this.handleFilterClick("faves")}>
                FAVES
            <span className="section-count">0</span>
        </div>
    </div>
    {allFilms}
</div>

        )
    }
}

export default FilmList