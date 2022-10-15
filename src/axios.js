import axios from 'axios';

/**base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?",
});

export default instance;