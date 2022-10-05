import axios from "axios";
//const api = "https://git.heroku.com/upu-task.git"
//const api = https://api.upu.io/v1/”;
const api = "http://localhost:8080/";
//const api = “http://192.168.1.79:8080/v1/“;
const instance = axios.create({
    baseURL: api,
});
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        console.log(err.response)
    }
);
export { instance };