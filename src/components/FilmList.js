import React, { Component } from 'react'
import './../index.css'
import FilmRow from './FilmRow'

export default class FilmList extends Component {
     state = {
          filter: 'all'
     }
     print = () => console.log(this.props.films[0].title)

     render() {
          const allFilms = this.props.films.map((film, key) => {
               return (
                    <FilmRow film={film} key={key} />
               )
          })
          const handleFilterClick = (m) => {
               console.log("a filter was clicked to "+m +'and the And the state is '+this.state.filter)
               this.setState({filter: m})
          }
          return (
               <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    <div className="film-list-filters">
                         <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={()=> handleFilterClick('all')}> 
                              ALL
                              <span className="section-count">{this.props.films.length}</span>
                         </div>
                         <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={()=> handleFilterClick('faves')}>
                              FAVES
                              <span className="section-count">0</span>
                         </div>
                    </div>

                    {allFilms}
               </div>
          )
     }
}