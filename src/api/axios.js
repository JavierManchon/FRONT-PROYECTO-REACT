import axios from "axios";

const instance = axios.create({
    baseURL: 'https://back-proyecto-react-eta.vercel.app//api',
    withCredentials: true,
    /*headers: {
        si lo pongo aqui se aplica a todo, tengo que ponerlo solo en los forms que reuqieran archivos
        "Content-Type": "multipart/form-data"
      }*/
});

export default instance