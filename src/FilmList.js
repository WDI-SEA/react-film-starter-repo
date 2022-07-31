import React, { Component } from 'react';

import FilmRow from './FilmRow'

// test for in return   {console.log("$$$$$$$",allFilms[0].props.film.title)}



class FilmList extends Component {


    render() {

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
            <h1></h1>
            {allFilms}

            <p>  </p>
        </div>    
    </>


        )
    }
}

export default FilmList;