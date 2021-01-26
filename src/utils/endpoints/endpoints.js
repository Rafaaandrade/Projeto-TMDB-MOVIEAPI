import API from './../api/api';

const ENDPOINTS = {
    FILME:
        'https://api.themoviedb.org/3/search/movie?api_key=' +
        API.KEY +
        '&language=pt-BR&query=',
    SERIE:
        'https://api.themoviedb.org/3/search/tv?api_key=' +
        API.KEY +
        '&language=pt-BR&&query=',
    PESSOA:
        'https://api.themoviedb.org/3/search/person?api_key=' +
        API.KEY +
        '&language=pt-BR&query=',
};
export default ENDPOINTS;
