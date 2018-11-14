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
        resolve(data);
      })
      .catch(data => reject(data));
  },
  complete: (taskId, completed) => {
    return (resolve, reject) => {
      return api.put(`/${taskId}/completed`, {'completed': completed})
        .then(({ data }) => {
          resolve(data);
        })
        .catch(data => reject(data));
    }
  },
  add: (description) => {
    return (resolve, reject) => {
      return api.post('/', { description })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(data => reject(data));
    }
  }
}
