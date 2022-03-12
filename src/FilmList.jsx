// import { Component } from 'react'
// import FilmRow from './FilmRow'

// export default class FilmList extends Component {
//     state = {
//         filter: 'all'
//     }

//     handleFilterClick = (e) => {
//         console.log(`${e} was clicked`)
//         this.setState({filter: e},() => console.log(this.state))
//     }

//     render() {

//         const allFilms = this.props.films.map((film,idx) => {
//             return (
//                 <FilmRow film={film} key={`film-${idx}`} />
//             )
//         })
//         return (
            // <div className="film-list">
            //     <h1 className="section-title">FILMS</h1>
            //     <div className="film-list-filters">
            //         <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={()=>this.handleFilterClick('all')}>
            //             ALL
            //             <span className="section-count">{this.props.films.length}</span>
            //         </div>
            //         <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={()=>this.handleFilterClick('faves')}>
            //             FAVES
            //             <span className="section-count">0</span>
            //         </div>
            //     </div>
            //     {allFilms}
            // </div>
//         )
//     }
// }

import { useState } from 'react'
import FilmRow from './FilmRow'


export default function FilmList({films, handleDetailsClick}) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFilterClick = (listType) => {
        // console.log(`${listType} was clicked`)
        setFilter(listType)
    }

    const handleFaveToggle = (film) => {
        let newFaves = faves.slice()
        const filmIndex = newFaves.indexOf(film)
        if(filmIndex === -1) {
            setFaves([...newFaves,film])
            console.log(`Adding ${film.title} to faves...`)
        } else {
            newFaves.splice(filmIndex,1)
            setFaves(newFaves)
            console.log(`Removing ${film.title} from faves...`)
        }
    }

    const filmsToDisplay = filter === 'all' ? films : faves
    const displayedFilms = filmsToDisplay.map((film,idx) => {
        return (
            <FilmRow 
                key={`film-${idx}`} 
                film={film} 
                onFaveToggle={handleFaveToggle} 
                isFave={faves.includes(film)}
                handleDetailsClick={handleDetailsClick}
            />
        )
    })
    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={()=>handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>handleFilterClick('faves')}>
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>
            {displayedFilms}
        </div>
    )
}