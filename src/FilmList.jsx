import React, { Component } from 'react';
import FilmRows from './FilmRows';

class FilmList extends Component {
    state={
        filter: 'all'

    }

    handleFilterClick = (filterName) =>{
        this.setState({
            filter: filterName
        })
        // console.log(this.state.filter)
    }

    render() { 
        const allFilms = this.props.films.map((film, index)=>{
            return  <FilmRows key={`filmrow-${index}`} film={film}/>
        })
        return (
         
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div name='all' 
                    
                    onClick={()=>this.handleFilterClick('all')} 
                    className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} >
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>
                    
                    <div name='faves' 
                    onClick={()=>this.handleFilterClick('faves')} 
                    className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}>
                        FAVES
                        <span className="section-count">0</span>
                    
                    </div>
                </div>

                {allFilms}
            </div>
        );
    }
}
 
export default FilmList;