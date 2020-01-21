const API_ROOT = `http://localhost:3000/`;

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

const getPictures = () => {
  return fetch(`${API_ROOT}/pictures/`, { headers: headers }).then(res =>
    res.json()
  );
};

const login = (username, password) => {
  return fetch(`${API_ROOT}/auth`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ username, password })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers
  }).then(res => res.json());
};

export default {
  auth: {
    login,
    getCurrentUser
  },
  pictures: {
    getPictures
  }
};