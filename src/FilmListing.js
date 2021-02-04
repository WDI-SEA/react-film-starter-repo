import { Component } from "react";
import FilmRow from './FilmRow'


class FilmListing extends Component {
    render () {
        const allFilms = this.props.films.map((FilmRow, i) => {
            <FilmRow films={this.props.films} key={`filmRow-${i}`} />
        }) 
        return (
        <div className='film-details'>
          <h1 className='section-title'>DETAILS</h1>
          {allFilms}
          <h1>{this.props.films[0].title}</h1>
        </div> 
        )
    }
}

export default FilmListing