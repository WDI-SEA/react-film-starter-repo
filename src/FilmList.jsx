// import React, { Component } from 'react'
import { useState } from 'react'
import FilmRow from './FilmRow'


export default function FilmList(props) {

    const [filter, setFilter] = useState('all')

    const handleFilterClick = (filter) => {
        setFilter(filter)
    }

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
                    <span className='section-count'>0</span>    
                </div>    
            </div>

            {props.films.map((film, i) => {
                return (
                        <div key={`filmrow${i}`}>
                            <FilmRow
                                film={film}
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