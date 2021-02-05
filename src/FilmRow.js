import React, {Component} from 'react';
import Fave from './Fave';

class FilmRow extends Component{
    handleDetailsClick=(e)=>{
        console.log('Fetching details');
    }
    render(){
        let posterUrl="https://image.tmdb.org/t/p/w780/"+this.props.film.poster_path;
        return(
            <div className="film-row" onClick={(e)=>this.handleDetailsClick(this.props.film)}>
                <img src={posterUrl} alt="" />
                <div className="film-summary">
                    <h1>{this.props.film.title}</h1>
                    <p>year</p>
                </div>
                <Fave />

            </div>
        )
    }
}

export default FilmRow;