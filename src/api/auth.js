//Importo el axios desde mi propio archivo axios en este caso, es el que tiene la informacion de la baseURL de la api, y el withCredencias hace que el navegador tenga la infomacion de credenciales en los headers 
import axios from './axios';

export const registerReq = (user) => axios.post('/register', user);

export const loginReq = (user) => axios.post('/login', user);

export const verifyTokenReq = () => axios.post('/verify-token');
