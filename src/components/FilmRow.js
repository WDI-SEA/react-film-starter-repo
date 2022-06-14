// import React, { Component } from 'react';
import Poster from './Poster'
import Fave from './Fave'


const FilmRow = ({
    film: {title, poster_path, release_date}, 
    onFaveToggle,
    film,
    isFave,
    handleDetailsClick,
}) => {
    
    const posterUrl = `https://image.tmdb.org/t/p/w780/${poster_path}`
    
    return (
        <div onClick={() => handleDetailsClick(film)} className='film-row'>
            <Poster posterUrl={posterUrl} title={title}/>

            <div className="film-summary">
                <h1>{title}</h1>
                <p>{release_date}</p>
            </div>
            <Fave isFave={isFave} onFaveToggle={() => onFaveToggle(film) } />
        </div>
    );
}

export default FilmRow



// class FilmRow extends Component {
//     handleDetailsClick = film => {
//         console.log('Fetching details for', film)
//     }
//   render() {
//       const { title, poster_path, release_date } = this.props.film
//       const posterUrl = `https://image.tmdb.org/t/p/w780/${poster_path}`
//     return (
//         <div onClick={() => this.handleDetailsClick(title)} className='film-row'>
//             <Poster posterUrl={posterUrl} title={title}/>

//             <div className="film-summary">
//                 <h1>{title}</h1>
//                 <p>{release_date}</p>
//             </div>
//             <Fave />
//         </div>
//     );
//   }
// }

// export default FilmRow;