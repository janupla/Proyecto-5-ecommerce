import axios from 'axios'

const backendUrlLocal = "http://localhost:4500" // define url backend
const backendUrlProd = "https://api-rest-express-mps8.onrender.com" //esta url es la de producción que está en RENDER
const axiosClient = axios.create({ //llama librería axios, método create
    baseURL: backendUrlProd  //cuando pruebo local, dejo la urlLocal, pero si pruebo como producción en render 
})                            //debo poner en baseURL: backendUrlProd

export default axiosClient