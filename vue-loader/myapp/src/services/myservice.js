import axios from 'axios';

const api = axios.create({
  baseURL: 'http://0.0.0.0:5000',
  timeout: 500,
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  all: (resolve, reject) => {
    return api.get('/')
      .then(({ data }) => {
        resolve(data.tasks);
      })
      .catch(data => reject(data));
  }
}
