import React, { Component } from 'react';

export default class FilmPoster extends Component {
  render() {
    return (
      <div>
        <img src={this.props.poster_path} alt={`${this.props.title}'s poster`} />
      </div>
    );
  }
}

