import React, { Component } from 'react';
import Fave from './Fave'
import Poster from  './Poster'


export default class FilmRow extends Component {

    handleDetailsClick = (film) => {
        console.log(`fetching details for ${this.props.film.title}`)
    }


    render() {
        
        return(
            <div className = 'film-row' onClick={()=>{this.handleDetailsClick(this.props.film.title)}}>
                <Poster poster_path={this.props.film.poster_path}/>
                <div className='film-summary'>
                    <h1>{this.props.film.title}</h1>
                    <p>{this.props.film.release_date.slice(0,4)}</p>
                </div>   
                <Fave/>
            </div>  
        )
    }
}