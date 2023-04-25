import { useState } from "react"
import FilmRow from "./FilmRow"

export default function FilmList(props) {
    const [filter, setFilter] = useState('all')
    const [faves, setFaves] = useState([])

    const handleFilterClick = filter => {
        console.log("a filter was clicked: " + filter)
        setFilter(filter)
    }

    const handleFaveToggle = film => {
        const newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex === -1) {
            newFaves.push(film)
        } else {
            newFaves.splice(filmIndex, 1)
        }
        // regardless of how we modified newFaves we want to set it in state
        setFaves(newFaves)
    }

    const filmsToDisplay = filter === "all" ? props.films : faves

    const allFilms = filmsToDisplay.map((film, i) => {
        return (
            <FilmRow 
                key={`filmrow ${i}`}
                film={film}
                onFaveToggle={() => handleFaveToggle(film)}
                isFave={faves.includes(film)}
                handleDetailsClick={props.handleDetailsClick}
            />
        )
    })

    return (
        <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${filter === "all" ? "is-active" : ""}`} onClick={() => handleFilterClick('all')}>
                    ALL 
                    <span className="section-count">
                        {props.films.length}
                    </span>
                </div>
                <div className={`film-list-filter ${filter === "faves" ? "is-active" : ""}`} onClick={() => handleFilterClick('faves')}>
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

//     handleFilterClick = (filter) => {
//         console.log("a filter was clicked: " + filter)
//         this.setState({
//             filter
//         })
//     }

//     render() {
//         console.log(this)
//         const allFilms = this.props.films.map((film, i) => {
//             return (
//                 <FilmRow 
//                     key={`filmrow ${i}`}
//                     film={film}
//                 />
//             )
//         })

//         return (
//         <div className="film-list">
//             <h1 className="section-title">FILMS</h1>
//             <div className="film-list-filters">
//                 <div className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('all')}>
//                     ALL 
//                     <span className="section-count">
//                         {this.props.films.length}
//                     </span>
//                 </div>
//                 <div className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : ""}`} onClick={() => this.handleFilterClick('faves')}>
//                     FAVES
//                     <span className="section-count">0</span>
//                 </div>
//             </div>
//             {allFilms}
//         </div>
//         )
//     }
// }