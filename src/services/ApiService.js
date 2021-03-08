import axios from "axios";

const ApiService = {
    get(resource){
        axios.get(`${resource}`).then((res) => {
           return res.data
          });
    }
}

export default ApiService;