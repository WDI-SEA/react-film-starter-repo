import React, {Component} from 'react'
import FilmRow from './FilmRow'
import {useState} from 'react'



export default function FilmList(props){
    let [filter,setFilter] =  useState('all')
    let [faves,setFaves] = useState([])
    function handleFilterClick (filter){
        console.log(filter, 'hi')
        setFilter(filter)
    }
    function handleFaveToggle(film){
        let newFaves = [...faves]
        const filmIndex =  newFaves.indexOf(film)
        filmIndex === -1 ? newFaves.push(film) : newFaves.splice(filmIndex, 1)
        setFaves(newFaves)
    }
    const filmsToDisplay = filter=== "all" ? props.films : faves
    const allFilms = filmsToDisplay.map((film,idx)=>{
        return(
            <FilmRow 
            film={film}
            key={`filmRow${idx}`}
            handleFaveToggle={handleFaveToggle}
            isFave={faves.includes(film)}
            handleDetailsClick={props.handleDetailsClick}
            />
        )
    })
    return(
        <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div
            className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`}
            onClick={()=>handleFilterClick('all')}
        >
            ALL
            <span className="section-count">{props.films.length}</span>
        </div>
        <div className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}
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


// export default class FilmList extends Component{
//     state={
//        filter: 'all' 
//     }
//     handleFilterClick = filter =>{
//         console.log(filter)
//         this.setState({
//             filter: filter
//         })
//     }
//     render(){
//         const allFilms = this.props.films.map((film,idx)=>{
//             return(
//                 <FilmRow 
//                 film={film}
//                 key={`filmRow${idx}`}
//                 />
//             )
//         })
//         return(
// <div className="film-list">
//     <h1 className="section-title">FILMS</h1>
//     <div className="film-list-filters">
//         <div
//             className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
//             onClick={()=>this.handleFilterClick('all')}
//         >
//             ALL
//             <span className="section-count">{this.props.films.length}</span>
//         </div>
//         <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
//             onClick={()=>this.handleFilterClick('faves')}
//         >
//             FAVES
//             <span className="section-count">0</span>
//         </div>
//     </div>

//     {allFilms}
// </div>
//              )
//     }
// }