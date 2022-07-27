import React, { Component } from 'react'
import Poster from './Poster'
import Fave from './Fave'



class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log(`fetching details for ${film}`)
    console.log(this.props)
  }
    render() {
      const date = new Date (this.props.film.release_date).getFullYear()

        return(
          <>
            <div className="film-row">
              <Poster poster_path={this.props.film.poster_path}/>
              <div className="film-summary">
              <Fave />
                    <h1>{this.props.film.title}</h1>
                    <p>{date}</p>
                </div>
            </div>
          </>
        )
    }

}


export default FilmRow