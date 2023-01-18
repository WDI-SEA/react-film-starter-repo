import React, { Component } from "react";
import { useState} from 'react'

export default function Poster(props) {
    return(
        <>
            <img 
                src={props.url} 
                alt={props.alt} 
            />
        </>
    )
}

// export default class Poster extends Component {
//     render() {
        // return(
        //     <>
        //         <img 
        //             src={this.props.url} 
        //             alt={this.props.alt} 
        //         />
        //     </>
        // )
//     }
// }