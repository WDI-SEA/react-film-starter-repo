const axios = require('axios');

(async () => {
  try{
    const response = await axios.get (`https://api.themoviedb.org/3/movie/550?api_key="805308b079380c6c5bd3a710f85407a4"`)


  } catch(err) {
    console.log(err)
  }
}) ()