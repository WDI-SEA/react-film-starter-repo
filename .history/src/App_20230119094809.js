


  function handleDetailsClick(film) {
    console.log('film details', film.title)
    setCurrent(film)
}
    return (
      <div className="film-library">

      <FilmList films={films} handleDetailsClick={handleDetailsClick} />
      <Details film={current}/>
      </div>
    );
  }

export default App;