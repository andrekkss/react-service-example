import Axios from 'axios';

//neste arquivo criamos funções base de serviço para nosso aplicativo react
const { REACT_APP_BASE_API_URL } = process.env;
const BASE_URL = (typeof REACT_APP_BASE_API_URL !== 'undefined') ? REACT_APP_BASE_API_URL : "http://localhost:3001/"
console.log("BASE_URL: " + BASE_URL);
const client = Axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export function get(url){ 
    return client.get(url)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error));
}

export function post(url, data){
    return client.post(url, data)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error));
}

export function del(url){
    return client.delete(url)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error));
}

export function update(url, data){
    return client.put(url, data)
    .then(response => Promise.resolve(response))
    .catch(error => Promise.reject(error));
}

export function setAuth(token){
    return client.defaults.headers.common['Authorization'] = `bearer ${token}`
}
