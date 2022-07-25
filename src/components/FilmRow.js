import React, {Component} from 'react'

export default class FilmRow extends Component {
     render() {
          return (
               <div className="film-row">
                    <h1 key={this.props.key}>{this.props.film.title}</h1>
               </div>
          )
     }
}