import React, {Component} from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'
class FilmRow extends Component{
    handleDetailsClick=(st)=>{
        console.log(st)
    }
    render(){
        let poster_path=`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`
        return(           
                <div className="film-row" onClick={()=>this.handleDetailsClick(this.props.film.title)}>
                    {/* <FilmRow src={poster_path} alt={this.props.film.title}/> */}
                    <FilmPoster src={poster_path} alt={this.props.film.title}/>
                    

                    <div className="film-summary">
                        <Fave/>
                        <h1>{this.props.film.title}</h1>
                        <p>{this.props.film.release_date}</p>
                    </div>
                </div>           
        )
    }
}

export default FilmRow