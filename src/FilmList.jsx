// import React, { Component } from 'react';
// import FilmRows from './FilmRows';

// class FilmList extends Component {
//     state={
//         filter: 'all'

//     }

//     handleFilterClick = (filterName) =>{
//         this.setState({
//             filter: filterName
//         })
//         // console.log(this.state.filter)
//     }

//     render() { 
//         const allFilms = this.props.films.map((film, index)=>{
//             return  <FilmRows key={`filmrow-${index}`} film={film}/>
//         })
//         return (
         
//             <div className="film-list">
//                 <h1 className="section-title">FILMS</h1>
//                 <div className="film-list-filters">
//                     <div name='all' 
                    
//                     onClick={()=>this.handleFilterClick('all')} 
//                     className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} >
//                         ALL
//                         <span className="section-count">{this.props.films.length}</span>
//                     </div>
                    
//                     <div name='faves' 
//                     onClick={()=>this.handleFilterClick('faves')} 
//                     className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}>
//                         FAVES
//                         <span className="section-count">0</span>
                    
//                     </div>
//                 </div>

//                 {allFilms}
//             </div>
//         );
//     }
// }
 
// export default FilmList;

import React, { useState } from 'react'
import FilmRows from './FilmRows';


export default function FilmList({films, handleDetailsClick}){
    
    const [filter, setFilter] = useState('all')

    const [faves, setFaves] = useState([])

    
    
    const handleFaveToggle =(film)=>{
        let newFaves = [...faves]
        const filmIndex = newFaves.indexOf(film)
        if (filmIndex < 0){
            console.log (`adding ${film.title} to faves`)
            newFaves = [...newFaves, film]
        } else {
            console.log (`removing ${film.title} to faves`)
            newFaves.splice(filmIndex, 1)
        }
        setFaves(newFaves)
        
    }   
    
    const filmsToDisplay = filter=== "all" ? films : faves; //ternnary

    const allFilms = filmsToDisplay.map((film, index)=>{
        return <FilmRows key={`filmrow-${index}`} 
        film={film} 
        onFaveToggle={handleFaveToggle} 
        isFave={faves.includes(film)}
        handleDetailsClick={handleDetailsClick}
        />
    })
    return (
 
        <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
            <div name='all' 
            
            onClick={()=>setFilter('all')} 
            className={`film-list-filter ${filter === 'all' ? 'is-active' : ''}`} >
                ALL
                <span className="section-count">{films.length}</span>
            </div>
            
            <div name='faves' 
            onClick={()=>setFilter('faves')} 
            className={`film-list-filter ${filter === 'faves' ? 'is-active' : ''}`}>
                FAVES
                <span className="section-count">{faves.length}</span>
            
            </div>
        </div>

        {allFilms}
    </div>

    )
}