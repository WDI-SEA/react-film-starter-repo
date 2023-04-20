import React, { Component } from 'react'

export default class Poster extends Component{
    render(){

        const url = this.props.url

        return(
            <div>
                <img src={`https://image.tmdb.org/t/p/w780/${url}`} alt="" />
            </div>
        )
    }
}
