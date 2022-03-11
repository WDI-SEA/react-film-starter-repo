import { Component } from "react";
import FilmRow from "./FilmRow";

class FilmList extends Component {

  state = {
    filter: 'all'
  }

  handleFilterClick = (filterName) => {
    // console.log(e.target.id)
    this.setState({filter:filterName}, () => console.log(this.state.filter))
    console.log(filterName)
  }

  render() {
    const filmTitle = this.props.films.map((film, index) => {
      return (
        <FilmRow film={film} key={`filmRow-${index}`} />
      )
    })

    // const filmPoster = this.props.films.map((poster, index) => {
    //   return 
    // })

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div
            className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
            onClick={() => this.handleFilterClick('all')} >
              ALL
              <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')} >
              FAVES
          <span className="section-count">0</span>
          </div>
      </div>

    {filmTitle}
</div>
    )
  }
}

export default FilmList