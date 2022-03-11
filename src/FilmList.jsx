import { Component } from 'react';
import FilmRow from './FilmRow';

export default class FilmList extends Component {
    state = {
        filter: 'all'
      } 

    handleFilterClick = (filterName) => {
        this.setState({
            filter: filterName
        })
    }

    render() { 
        let allFilms = this.props.films.map((film, idx)=> {
            return (
                <FilmRow key={`Film ID: ${idx}`} film={film}/>
            )
        })
        return (
            <div className="film-list">
                <h1 className="section-title">FILMS</h1>
                <div className="film-list-filters">
                    <div 
                        onClick={()=>this.handleFilterClick('all')} 
                        name="all" 
                        className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`}
                    >
                        ALL
                        <span className="section-count">{this.props.films.length}</span>
                    </div>

                    <div 
                        onClick={()=>this.handleFilterClick('faves')}
                        name="faves"
                        className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}
                    >
                        FAVES
                    <span className="section-count">0</span>
                </div>
            </div>
            {allFilms}
            </div>
        );
    }
}
