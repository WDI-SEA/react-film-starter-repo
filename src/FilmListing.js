import { Component } from "react";


class FilmListing extends Component {
    render () {
        let allFilms = this.props.films.map((films, i) => {
            return <div className='film-row'>
                <h1>{films.title}</h1>
            </div>
        });
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