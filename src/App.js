import './App.css';
import FilmList from './components/FilmList'
import Details from './components/Details'
import TMDB from './TMDB';

function App () {
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMs</h1>
          <FilmList films={TMDB.films}/>
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAIL
          </h1>
          <Details films={TMDB.films} />
        </div>
      </div>
    );
  }


export default App;