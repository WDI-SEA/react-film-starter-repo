
import { useState } from 'react'
import FilmRow from './FilmRow' 


export default function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFaveToggle = film => {
        console.log('fave this film:', film)
        //copy of array from state
        const newFaves = [...faves]
        const filmIndex =  newFaves.indexOf(film)
        if (filmIndex === -1) {
            //add the film to the faves
            setFaves([...faves, film])
        } else {
            // we need to remove the film from the faves
            newFaves.splice(filmIndex, 1)
            setFaves(newFaves)
        }

    }
    
    const filmsToDisplay = filter === 'all' ? props.films : faves

    const allFilms = filmsToDisplay.map((film, idx) => {
        return (
            <FilmRow 
                film={film}
                key={`FilmRow${idx}`}
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}
            />
        )
    })


    return(
        <div className='film-list'>
        <h1 className='section-title'>FILMS</h1>
        <div className="film-list-filters">
            <div className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} onClick={() => setFilter('all')}>
                ALL
                <span className="section-count">{props.films.length}</span>
            </div>
            <div className={`film-list-filter ${filter === 'fave' ? 'is-active' : ''}`}
                onClick={() => setFilter('fave')}>
                FAVES
                <span className="section-count">{faves.length}</span>
            </div>
        </div>
        {allFilms}
    </div>
    )
}

// export default class FilmList extends Component {
//     state = {
//         filter: 'all'
//     }

//     handleFilterClick = filter => {
//         this.setState({
//             filter:filter
//         })

//         console.log(` filter was clicked`)
//     }

//     render() {
//         const allFilms = this.props.films.map((film, idx) => {
//             return (
//                 <FilmRow 
//                     film={film}
//                     key={`FilmRow${idx}`}
//                 />
//             )
//         })
    
//         return (
//             <div className='film-list'>
//                 <h1 className='section-title'>FILMS</h1>
//                 <div className="film-list-filters">
//                     <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
//                         ALL
//                         <span className="section-count">{this.props.films.length}</span>
//                     </div>
//                     <div className={`film-list-filter ${this.state.filter === 'fave' ? 'is-active' : ''}`}
//                         onClick={() => this.handleFilterClick('fave')}>
//                         FAVES
//                         <span className="section-count">0</span>
//                     </div>
//                 </div>
//                 {allFilms}
//             </div>
//         )
//     }
// }