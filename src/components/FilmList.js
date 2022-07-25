import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {
     print = () => console.log(this.props.films[0].title)
     const 
     render() {
          const allFilms = this.props.films.map((film, key) => {
                return (
                    <FilmRow film={film} key={key} />
               )
          })
          return (
               <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    {allFilms}
               </div>
          )
     }
}