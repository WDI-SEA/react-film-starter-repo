import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmList extends Component {

    handleFilterClick = e =>{
        this.setState({
            filter: e
        })
    }   

    state = {
        filter: 'all'
    }
    if(e === e) {
        e.className='is-active' ? 'is-active' : 'film-list-filter'
    }


    render () {
        const allFilms = this.props.films.map((film, i)=>{
            return <FilmRow  
            film={film}
            key={`FilmRow${i}`} 
            />
        })
        
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                    <div className="film-list-filters">
                    <div onClick={()=>this.handleFilterClick('all')} className='film-list-filter'>
                        ALL
                    <span className="section-count">{this.props.films.length}</span>
                     </div>
                <div onClick={()=> this.handleFilterClick('faves')} className="film-list-filter">
                FAVES
                <span className="section-count">0</span>
                 </div>
             </div>
                {allFilms}
            </div>
        )
    }
}