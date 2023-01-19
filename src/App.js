import './App.css';
import Details from './components/Details';
import FilmList from './components/FilmList';
import TMDB from './TMDB';
import { useState, useEffect } from 'react';

function App() {
  const [films, setFilm] = useState([])
  const [current, setCurrent] = useState({})
  const [faves, setFave] = useState([])
  const [filter, setFilter] = useState("all")
  
  useEffect(() => {
    const popularFilmsUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB.api_key}&language=en-US&page=1`;
    fetch(popularFilmsUrl)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData)
      setFilm(jsonData.results)
    })
  }, [])
  
  function handleFilterClick(filter) {
    // console.log('filter was clicked', filter)
    setFilter (filter)
  }
  
  function handleFaveToggle(filmName) {
    let newFaves = [...faves]
    const filmIndex = newFaves.indexOf(filmName)
    console.log(filmIndex, "film index", "film name", filmName.title)
    
    if(filmIndex < 0){
      setFave([...newFaves, filmName])
    } else {
      newFaves.splice(filmIndex, 1)
      setFave(newFaves)
    }
  }
  
  function handleDetailsClick(film) {
    console.log('film details', film.title)
    setCurrent(film)
  }

  //fave handler function 
  function handleFave(e, film) {
    e.stopPropagation()
    console.log('handling fave', film)
    //calls a function higher up the tree
    handleFaveToggle(film)
  }

  const filmsToDisplay = filter ==="all" ? films : faves;

  return (
    <div className="film-library">
      
      <FilmList 
        films={films} 
        handleDetailsClick={handleDetailsClick} 
        filmsToDisplay={filmsToDisplay}
        handleFaveToggle={handleFaveToggle}
        handleFilterClick={handleFilterClick}
        faves={faves}
        filter={filter}
        handleFave={handleFave}
        />
      <Details 
        film={current}
        handleFave={handleFave}
        faves={faves}
        onFaveToggle={() => handleFaveToggle(current)} 
      />
      </div>
    );
  }
  
  export default App;