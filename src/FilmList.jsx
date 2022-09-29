// import React, { Component } from 'react'
import { useState } from 'react'
import FilmRow from './FilmRow'


export default function FilmList(props) {

    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFilterClick = (filter) => {
        setFilter(filter)
    }

    const handleFaveToggle = (film) => {
        console.log('Handling fave toggle!')
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex === -1) {
            console.log(`Adding ${film.title} to faves...`)
            newFaves = [...newFaves, film]
        } else {
            console.log(`Removing ${film.title} from faves...`)
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }

    const filmsToDisplay = filter=== "all" ? props.films : faves;

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className='film-list-filters'>
                <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => {
                    handleFilterClick("all")
                }}>
                    ALL
                    <span className='section-count'>{props.films.length}</span>
                </div>
                <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{
                    handleFilterClick("faves")
                }}>
                    FAVES
                    <span className='section-count'>{faves.length}</span>    
                </div>    
            </div>

            
            {filmsToDisplay.map((film, i) => {
                return (
                        <div key={`filmrow${i}`}>
                            <FilmRow
                                film={film}
                                // key={`filmrow${i}`}
                                onFaveToggle={handleFaveToggle}
                                isFave={faves.includes(film)}
                                handleDetailsClick={() => props.handleDetailsClick(film)} 
                            />
                        </div>
                    )
                })
            }
        </div>

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
//         console.log(filter)
//     }

//     render() {
//         const allFilms = this.props.films.map((film, i) => {
//             return (
//                     <div key={`filmrow${i}`}>
//                         <FilmRow
//                             film={film}
//                         />
//                     </div>
//                 )
//         })
//         return (

//             <div className="film-list">
//                 <h1 className="section-title">FILMS</h1>
//                 <div className='film-list-filters'>
//                     <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => {
//                         this.handleFilterClick("all")
//                     }}>
//                         ALL
//                         <span className='section-count'>{this.props.films.length}</span>
//                     </div>
//                     <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{
//                         this.handleFilterClick("faves")
//                     }}>
//                         FAVES
//                         <span className='section-count'>0</span>    
//                     </div>    
//                 </div>

//                 {allFilms}
//             </div>

//         )
//     }
// }