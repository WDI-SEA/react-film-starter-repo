import React, { Component } from 'react';
import FilmRows from './FilmRows';

class FilmListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
  }
  handleFilterClick = (filter) => {
    this.setState({
      filter: filter
    })
    console.log('clicked', this.state.filter)
  }
  render() {
    const renderedFilms = this.props.films.map((film) =>{
      return (
        <FilmRows film={ film }/>
      )
    })
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
            <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => {
              this.handleFilterClick("all")
            }}>
              ALL
              <span className="section-count">{this.props.films.length}</span>
            </div>
            <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{
              this.handleFilterClick("faves")
            }}>
              FAVES
              <span className="section-count">0</span>
            </div>
        </div>
        
        {renderedFilms}
      </div>
    )
  }
}

export default FilmListing;