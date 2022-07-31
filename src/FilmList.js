import React, { Component } from 'react';

import FilmRow from './FilmRow'

// test for in return   {console.log("$$$$$$$",allFilms[0].props.film.title)}



class FilmList extends Component {

    render() {



        // makes a var with array of processed array info.
        // each element has <filmrow and key and film passed
        // then showing all below in Allfilms, but editing on FilmRow
        const allFilms = this.props.films.map((film, idx) =>(

                <FilmRow
                    key ={idx}
                    film = {film}
                />                          
        ) )

        const handleFilterClick  = (filter) => {
            console.log('a fitler was clicked:',filter)
            
        }




        return (
    <>
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className="film-list-filter" onClick={()=>handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{this.props.films.length}</span>
                </div>
                <div className="film-list-filter" onClick={()=>handleFilterClick('faves')}>
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

export default FilmList;