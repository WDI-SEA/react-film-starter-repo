import React, { Component } from 'react';

class FilmPoster extends Component {
  render() {
    return (
      <div>
        <img src={ this.props.poster.url } alt={ this.props.poster.alt } />
      </div>
    );
  }
}

export default FilmPoster;