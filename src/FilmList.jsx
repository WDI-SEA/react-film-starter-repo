import React, { Component } from "react";
import FilmRow from './FilmRow'
import { useState} from 'react'

export default function FilmList(props) {
   
    const allFilms = props.films.map((film, idx) => {
        return(
            <FilmRow 
                key={`film${idx}`}
                film={film}
            />
        )
    })
    return(
        <>
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div className={`film-list-filter ${props.filter === 'all' ? 'is-active' : ''}`} 
                    onClick={() => this.handleFilterClick("all")}>
                        ALL
                        <span className="section-count">{props.films.length}</span>
                    </div>
                    <div className={`film-list-filter ${props.filter === 'faves' ? 'is-active' : ''}`} 
                    onClick={() => this.handleFilterClick("faves")}>
                        FAVES
                        <span className="section-count">0</span>
                    </div>
                </div>

            {allFilms}
            </div>
        </>
    )
}



// export default class FilmList extends Component {
//     state = {
//         filter: 'all'
//     }
//     handleFilterClick = filter => {
//         console.log(filter)
//         this.setState({
//             filter: filter 
//         }) 
//     }
//     render() {
//         const allFilms = this.props.films.map((film, i) => {
//             return(
//                 <FilmRow 
//                     film={film}
//                     key={`FilmRow${i}`}
//                 />     
//             )
//         })
//         return (
            // <div className="film-list">
            // <h1 className="section-title">FILMS</h1>
            // <div className="film-list-filters">
            //     <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} 
            //     onClick={() => this.handleFilterClick("all")}>
            //         ALL
            //         <span className="section-count">{this.props.films.length}</span>
            //     </div>
            //     <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} 
            //     onClick={() => this.handleFilterClick("faves")}>
            //         FAVES
            //         <span className="section-count">0</span>
            //     </div>
            // </div>
        
//             {allFilms}
//         </div>
//         )
//     }
// }