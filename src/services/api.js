//https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/550?api_key=dde37cf6e1bf29ee3e7ba153b8fea918

//key
//dde37cf6e1bf29ee3e7ba153b8fea918

import axios from 'axios';

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;