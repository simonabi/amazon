
import axios from "axios";

const instance = axios.create({
    baseURL:"https://us-central1-fir-2cb9c.cloudfunctions.net/api"
});

export default instance;
// "http://127.0.0.1:5001/fir-2cb9c/us-central1/api"
