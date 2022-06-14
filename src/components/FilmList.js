import { useState } from 'react'
import FilmRow from './FilmRow'

export default function FilmList(props){
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])
    const [isFave, setIsFave] = useState(false)

    const handleFaveToggle = (film) => {
        console.log('toggling fave')
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex === -1){
            console.log(`${film.title} added to favorites`)
            newFaves = [...newFaves, film]
        }else {
            console.log(`${film.title} removed from favorites`)
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
    }
    
    const handleFilterClick = (filter) => {
        // e.preventDefault()
        setFilter(filter)
    }
    const filmsToDisplay = filter === 'all' ? props.films : faves
    const allFilms = filmsToDisplay.map((film, i) => {
        return(
            <div className='film-row'>
                <FilmRow 
                key={`filmRow-${i}`} 
                film={film} 
                onFaveToggle={handleFaveToggle}
                isFave={faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}
                />
            </div>
        )
    })
    return(
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div 
                className={`film-list-filter 
                ${filter === 'all' ? 'is-active' : ''}`}
                onClick={()=>handleFilterClick('all')}
                >
                    ALL
                    <span className="section-count">{props.films.length}</span>
                </div>
                <div 
                className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
                onClick={()=>handleFilterClick('faves')}
                >
                    FAVES
                    <span className="section-count">{faves.length}</span>
                </div>
            </div>
            {allFilms}
        </div>
       
    )
}


// export default class FilmList extends Component {
//     handleFilterClick = (filter) => {
//         // e.preventDefault()
//         this.setState({filter})
//     }

//     state = {
//         filter: "all"
//     }

//     render(){
//         const allFilms = this.props.films.map((film, i) => {
//             return(
//                 <div className='film-row'>
//                     <FilmRow key={`film-${i}`} film={film}/>
//                 </div>
//             )
//         })
//         return(
//             <div className="film-list">
//                 <h1 className="section-title">FILMS</h1>
//                 <div className="film-list-filters">
//                     <div 
//                     className={`film-list-filter 
//                     ${this.state.filter === 'all' ? 'is-active' : ''}`}
//                     onClick={()=>this.handleFilterClick('all')}
//                     >
//                         ALL
//                         <span className="section-count">{this.props.films.length}</span>
//                     </div>
//                     <div 
//                     className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
//                     onClick={()=>this.handleFilterClick('faves')}
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