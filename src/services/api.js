import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.ifome.net'
})

export default api;