
import React, { Component } from 'react';


export default class Poster extends Component {
    state = {};
    render() {
        return (
            <img src={this.props.url} alt="movie-poster"/>
        );
     }
  }  