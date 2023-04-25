const axios = require('axios')


(async () => {
    try{
        const response = "https://api.themoviedb.org/3/movie/550?api_key=c1b6c97dff5f7bf8243398f64d8c1a8f"

        console.log(response.data)
    } catch(error) {
        console.log(error)
    }
})