// import React, { Component } from 'react'
import { useState } from 'react'
import Poster from './Poster'
import Fave from './Fave'

export default function FilmRow(props){

    const handleDetailsClick = film => {
        console.log('fetchin details for film', film.title)
    }


    return (
        <div className='film-row'
            onClick={() => handleDetailsClick(props.film)}
        >
            <Poster 
                poster_path={props.film.poster_path}
                title={props.film.title}
            />

            <div className='film-summary'>
                <h1>{props.film.title}</h1>

                {/* <p>{this.props.film.release_date.split('-')[0]}</p> */}
                {/* <p>{new Date(this.props.film.release_date).getFullYear()}</p> */}
                <p>{props.film.release_date.substring(0, 4)}</p>

                <Fave />
            </div>
        </div>
        )
    
}