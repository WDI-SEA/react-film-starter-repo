import React, { Component } from "react"

export default class Poster extends Component{
    render(){
        return(
            <>
             <img src= {`https://image.tmdb.org/t/p/w780/${this.props.poster_path}`} 
                alt= {`${this.props.title}'s movie poster`} />
            </>
        )
    }
}