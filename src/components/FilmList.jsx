// import React, { Component } from 'react'
import FilmRow from './FilmRow'
import {useState} from "react"

export default function FilmList({movies, handleDetailsClick}){
    // initializing /setting state
    const [filter, setFilter] = useState("all") 
    const [faves, setFaves] = useState([])
    const [isFave, setIsFave] = useState(false)

    const handleFaveToggle = (movie) => {
        let newFaves = faves
        // films for when we know what the data looks like, indexOf to find it and remove it from faves?
        let filmIndex = newFaves.indexOf(movie)
        if (filmIndex < 0) {
            // console.log("ADDING FILM NAME TO FAVES")
            newFaves.push(movie)
            setIsFave(isFave => !isFave)
        } else {
            // console.log("REMOVING FILM NAME TO FAVES")
            newFaves.splice(filmIndex,1)
            setIsFave(isFave => !isFave)
        }
        setFaves(newFaves)
    }

    const filmsToDisplay = filter === "all" ? movies : faves;
    const allFilms = filmsToDisplay.map((film) => {
        return (
            <FilmRow
                key={film.id}
                film={film}
                onFaveToggle = {handleFaveToggle}
                isFave = {faves.includes(film)}
                handleDetailsClick = {handleDetailsClick}
            />
        )
    }) 
    
    return(
        <>
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div
                        onClick={() => setFilter("all")}
                        className={`film-list-filter ${filter === "all" ? 'is-active' : ''}`}
                    >
                        ALL
                        <span className="section-count">{movies.length}</span>
                    </div>
                    <div
                        onClick={() => setFilter("faves")}
                        className={`film-list-filter ${filter !== "all" ? 'is-active' : ''}`}
                    >
                        FAVES
                        <span className="section-count">{faves.length}</span>
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
//     handleFilterClick = (filter) => {
//         this.setState({
//             filter
//         })
//     }
//     render() {
//         const allFilms = this.props.movies.map((film) => {
//             return (
//                 <FilmRow
//                     key={film.id}
//                     film={film}
//                 />
//             )
//         })
//         return (
//             <div className="film-list">
//                 <h1 className="section-title">FILMS</h1>
//                 <div className="film-list-filters">
//                     <div
//                         onClick={() => this.handleFilterClick('all')}
//                         className={`film-list-filter ${this.state.filter === "all" ? 'is-active' : ''}`}
//                     >
//                         ALL
//                         <span className="section-count">{this.props.movies.length}</span>
//                     </div>
//                     <div
//                         onClick={() => this.handleFilterClick('favs')}
//                         className={`film-list-filter ${this.state.filter !== "all" ? 'is-active' : ''}`}
//                     >
//                         FAVES
//                         <span className="section-count">0</span>
//                     </div>
//                 </div>

//                 {allFilms}
//             </div>
//         )
//     }
// }
