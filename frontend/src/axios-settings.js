import axios from 'axios';                                                                                                      

/*const api = axios.create({
    baseURL: 'https://api.mlab.com/api/1/databases/co2_emissions/collections/emissions_info?apiKey=gkgdJ3A2ENcMoUrK2QgYOWHybaQII1AB',
});*/

const api = axios.create({
    baseURL: 'http://localhost:5000/emissions'
})

export default api;