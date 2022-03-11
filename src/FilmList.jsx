import React, { Component } from "react";
import FilmRow from "./FilmRow";


class FilmList extends Component {
  state = {
    filter: 'all'
  }


  handleFilterClick = (e) => {
    // console.log(e.target.id)
    this.setState({
      filter: e.target.id
    })
  }

  render() {
    const filmTitle = this.props.films.map((film, index) => {
      return <FilmRow key={`filmKey=${index}`}film={film} />;
    });
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' 
          // onClick={()=>this.handFilterClick('all')}
          : ''}`} onClick={this.handleFilterClick} id="all">
            ALL
            <span className="section-count">{this.props.films.length}</span>
          </div>
          <div className={`film-list-filter ${this.state.filter === 'faves' ? 
          // onClick={()=>this.handFilterClick('faves')}
          'is-active' : ''}`} onClick={this.handleFilterClick} id="faves">
            FAVES
            <span className="section-count">0</span>
          </div>
        </div>

        {filmTitle}
      </div>
    );
  }
}

export default FilmList;
