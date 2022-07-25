import React, { Component } from "react";

class Poster extends Component {


  render() {
    const posterUrl = this.props.url;
    const alt = this.props.alt;
    
    return (
      <>
        <img src={posterUrl} alt={alt} />
      </>
    )
  }
}

export default Poster;