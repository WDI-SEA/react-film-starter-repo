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

        return (
    <>

        <div className="film-list">
            <h1 className="section-title">FILMS</h1>

            {allFilms}

            <p>  </p>
        </div>    
    </>


        )
    }
}

export default FilmList;