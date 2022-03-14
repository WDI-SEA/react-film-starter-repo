// import React, { Component } from 'react';
import React, { useState } from 'react';

import FilmRow from './FilmRow'


// class FilmList extends Component {
//     state = {
//         filter: 'all'
//     }

//     handleFilterClick = (filter) => {
//         // e.preventDefault()
//         console.log(filter)
//         this.setState({
//             filter: filter
//         })
//     }

//     render() { 
//         const allFilms = this.props.films.map((film, index) => {
//             return (
//                 <FilmRow 
//                     key={`filmitem=${index}`} 
//                     film={film}
//                 />
//             )
//         })
//         return (
//             <>
//                 <div className="film-list">
//                     <h1 className="section-title">FILMS</h1>
//                     <div className="film-list-filters">
//                         <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => {
//                             this.handleFilterClick("all")
//                         }}>
//                             ALL
//                             <span className="section-count">{this.props.films.length}</span>
//                         </div>
//                         {/* can also do this and give the div an id and use event.target.id */}
//                         <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={()=>{
//                             this.handleFilterClick("faves")
//                         }}>                            
//                             FAVES
//                             <span className="section-count">0</span>
//                         </div>
//                     </div>

//                     {allFilms}
//                 </div>
//             </>
//         );
//     }
// }
 
// export default FilmList;




// functional component

export default function FilmList({ films, handleDetailsClick }) {

    const [faves, setFaves] = useState([])

    const [filter, setFilter] = useState('all')

    const handleFaveToggle = (filmsObject) => {
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(filmsObject)
        if (filmIndex < 0) {
            console.log(`adding ${filmsObject.title} to faves`)
            newFaves = [...newFaves, filmsObject]
        } else {
            console.log(`removing ${filmsObject.title} from faves`)
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }

    const filmsToDisplay = filter === 'all' ? films : faves

    const handleFilterClick = (filter) => {
        // e.preventDefault()
        console.log(filter)
        setFilter(
            filter
        )
    }

    const allFilms = filmsToDisplay.map((film, index) => {
        return (
            <FilmRow 
                key={`filmitem=${index}`} 
                film={film}
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
                handleDetailsClick={handleDetailsClick}
            />
        )
    })

    return (
        <>
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div 
                        className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} 
                        onClick={() => {handleFilterClick("all")}}
                    >
                        ALL
                        <span className="section-count">{films.length}</span>
                    </div>
                    {/* can also do this and give the div an id and use event.target.id */}
                    <div 
                        className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`} 
                        onClick={()=>{handleFilterClick("faves")}}
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