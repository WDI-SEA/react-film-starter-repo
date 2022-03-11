import { Component } from "react";
import Details from "./Details"
import FilmRow from './FilmRow';

export default class FilmList extends Component {
    state= {
        filter: "all"
    }
        handleFilterClick = (e) => {
            this.setState({
                filter: e
            })
        }    
    render() {
        const allFilms = this.props.films.map((film, idx) => {
            return <FilmRow WholeFilm={film} />              
        });       
        return (
            <div className="film-list">
              <h1 className="section-title">FILMS</h1>
              <div className="film-list-filters">
                    <div onClick={() =>{this.handleFilterClick("all")}} name="all" className="film-list-filter">
                  ALL
                  <span className="section-count">{this.props.films.length}</span>
                </div>
                <div onClick={() =>{this.handleFilterClick("all")}} name="all" className="film-list-filter">
                  FAVES
                  <span className="section-count">0</span>
                </div>
              </div>    
              {allFilms}
            </div>
          );
        }
      }