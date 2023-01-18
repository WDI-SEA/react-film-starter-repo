import React, { Component } from "react";
import FilmRow from './FilmRow'
import { useState} from 'react'

export default function FilmList(props) {

    const [filter, setFilter] = useState('all')

    const [faves, setFaves] = useState([])

    const handleFaveToggle = film => {
        console.log(`Fave this film`, film)
        //make a copy of the array from state
        const newFaves = [...faves]
        const filmIndex = faves.indexOf(film)
        if (filmIndex === -1) {
            //we need to add film to faves 
            setFaves([...faves, film])
            console.log('adding', film)
        } else {
            //we need to remove films from faves
            newFaves.splice(filmIndex, 1)
            setFaves(newFaves)
            console.log('removing', film)
        }
    }

    const filmsToDisplay = filter === 'all' ? props.films : faves 

    const allFilms = filmsToDisplay.map((film, idx) => {
        return(
            <FilmRow 
                key={`filmrow${idx}`}
                film={film}
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}
            />
        )
    })

    
    return(
        <>
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>

                <div className="film-list-filters">

                    <div className={`film-list-filter ${props.filter === 'all' ? 'is-active' : ''}`} 
                    onClick={() => setFilter("all")}>
                        ALL
                        <span className="section-count">{props.films.length}</span>
                    </div>

                    <div className={`film-list-filter ${props.filter === 'faves' ? 'is-active' : ''}`} 
                    onClick={() => setFilter("faves")}>
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