import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-clone-backend-paulpirie.herokuapp.com/'
});

export default instance;