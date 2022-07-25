import React, { Component } from 'react'

export default class FilmList extends Component {
     print = () => console.log(this.props.films[0].title)
     const 
     render() {
          const allFilms = this.props.films.map((film, key) => {
                return (<div className="film-row">
                              <h1 key={key}>{film.title}</h1>
                         </div>)
          })
          return (
               <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    {allFilms}
               </div>
          )
     }
}