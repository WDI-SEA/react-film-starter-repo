import React, { Component } from "react";

class FilmPoster extends Component {
    render() {
        return(
            <div>
                <img src={this.props.poster} alt={this.props.alt}/>
            </div>
        )
    }
}

export default FilmPoster