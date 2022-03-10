import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {
  render () {
      const filmList = this.props.films.map((film, idx) => {
          return <FilmRow film={film}/>
      })
    return (
      <>
        <div className='film-list'>
          <h1 className='section-title'>FILMS</h1>
          <h3>{filmList}</h3>
        </div>
      </>
    )
  }
}
