import React, { Component} from "react"
import FilmRow from "./FilmRow"

class FilmList extends Component {
    render() {
        const allFilms = this.props.films.map((film, idx) => {
            return   (<FilmRow 
            film={film}
            key={idx}
                />)
        })
        return (
            <div className="film-library">
              <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    {/* <h1 >{this.props.films[0].title}</h1> */}
    <FilmRow film={this.props.films}/>
    {allFilms}
  </div>
  </div>
            

        )
    }
}

export default FilmList