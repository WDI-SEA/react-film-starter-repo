// import React, { Component } from 'react'
import { useState } from 'react'
import FilmRow from './FilmRow'


const FilmList = (props) => {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

   const handleFilterClick = (filter) => {
        
            setFilter(filter)

    }
    const handleFaveToggle = (film) => {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film);
        if (filmIndex < 0) {
            console.log(`Adding ${film.title} to faves`)
            newFaves = [...newFaves, film];
        } else {
            console.log(`Removing ${film.title} to faves`)
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }

     
    
    
     const filmsToDisplay = filter === 'all' ? props.films : faves;

    const allFilms = filmsToDisplay.map((film) => {
        return (
            <FilmRow
                key={film.id}
                film={film}
                onFaveToggle={handleFaveToggle}
                isFave ={faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}
            />
        )
    })

    return (
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
            <div
                onClick={() => handleFilterClick('all')}
                className={`film-list-filter ${filter === "all" ? 'is-active' : ''}`}
            >
                ALL
                <span className="section-count">{props.films.length}</span>
            </div>
            <div
                onClick={() => handleFilterClick('favs')}
                className={`film-list-filter ${filter !== "all" ? 'is-active' : ''}`}
            >
                FAVES
                <span className="section-count">{faves.length}</span>
            </div>
        </div>

        {allFilms}
    </div> 
    )
}

export default FilmList



// export default class FilmList extends Component {
//     state = {
//         filter: 'all'
//     }
    // handleFilterClick = (filter) => {
    //     this.setState({
    //         filter
    //     })
    // }
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
