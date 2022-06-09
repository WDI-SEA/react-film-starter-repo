import React, { Component } from 'react';


class Poster extends Component {
  render() {
        const { posterUrl, title } = this.props

        return  <img src={posterUrl} alt={title}/>
    }
}

export default Poster;
