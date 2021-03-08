import axios from "axios";

const ApiService = {
  init() {
    axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
  },
  get(resource) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${resource}`)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  },
  post(resource, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${resource}`, params)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  },
  put(resource, params) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${resource}`, params)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  },
  delete(resource) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${resource}`)
        .then((response) => resolve(response))
        .catch((err) => reject(err));
    });
  },
};

export default ApiService;
