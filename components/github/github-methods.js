import { parseString } from 'xml2js';
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

function fetchUserRepos(username) {
  const url = `https://api.github.com/users/${username}/repos?page=1&per_page=100`;
  return new Promise((resolve, reject) => {
    require.ensure([], require => {
      try {
        fetch(url)
          .then(checkStatus)
          .then(parseJSON)
          .then((data) => resolve(data))
          .catch((error) => reject(error))
      } catch (error) {
        reject(error);
      }
    });
  });
}

function fetchUserEvents(username) {
  const url = `https://api.github.com/users/${username}/events?page=1&per_page=100`;
  return new Promise((resolve, reject) => {
    require.ensure([], require => {
      try {
        fetch(url)
          .then(checkStatus)
          .then(parseJSON)
          .then((data) => resolve(data))
          .catch((error) => reject(error))
      } catch (error) {
        reject(error);
      }
    });
  });
}

function deconstructUserEvent(event) {
  const {
    payload: {action},
    type,
    repo,
    created_at
  } = event;
  return {
    type,
    repo,
    created_at,
    action
  }
}


export {
  fetchUserRepos,
  fetchUserEvents,
  deconstructUserEvent
};
