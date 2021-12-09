import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pai.github.com',
})

export default api;
