import axios from "axios";

const instance= axios.create({
    baseURL: "http://localhost:5001/challenge-9205a/us-central1/api"  
});

export default instance;
//The API(Cloud Function) URL