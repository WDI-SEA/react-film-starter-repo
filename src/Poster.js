import React, {Component} from "react";

class Poster extends Component{
    render () {
        return (
            <>
            {/* <img src={`https://image.tmdb.org/t/p/w780/${this.props.film.poster_path}`} alt="{this.props.film.title}" /> */}
            {this.props.film.poster_path}
            </>
        )
    }

}

export default Poster