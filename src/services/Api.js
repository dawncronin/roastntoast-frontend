const API_ROOT = `http://localhost:3000/api/v1/`;

let token = localStorage.getItem("token")

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json',
  "Authorization": token
};

const getPictures = () => {
  return fetch(`${API_ROOT}pictures/`, { headers: headers }).then(res =>
    res.json()
  );
};
const getComments = () => {
  return fetch(`${API_ROOT}comments/`, { headers: headers }).then(res =>
    res.json()
  );
};

const postPicture = (img_url, user_id, roast_bio, toast_bio) => {

}

const postComment = (img_id, user_id, text, roast) => {
    return fetch(`${API_ROOT}comments/new`, {
      method: `Post`,
      headers: headers,
      body: JSON.stringify({img_id: img_id, user_id: user_id, text: text, roast: roast})
    }).then(res => res.json());
  };

const signUp = (username, password, passwordConfirmation) => {
  return fetch(`${API_ROOT}users`, {
    method: `POST`,
    headers: headers,
    body: JSON.stringify({ user: {username: username, password: password, password_confirmation: passwordConfirmation} })
  }).then(res => res.json());
};

const login = (username, password) => {
  return fetch(`${API_ROOT}login`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ user: {username, password} })
  }).then(res => res.json());
};

const getCurrentUser = () => {
  return fetch(`${API_ROOT}current_user`, {
    headers: headers
  }).then(res => res.json());
};

export default {
  signUp,
  auth: {
    login,
    getCurrentUser
  },
  pictures: {
    getPictures,
    postPicture
  },
  comments: {
    getComments,
    postComment
  }
};