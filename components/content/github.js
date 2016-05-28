import { parseString } from 'xml2js'
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

function fetchUserRepos(user = "josephdburdick") {
  const url = `https://api.github.com/users/${user}/repos?page=1&per_page=100`;
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

function fetchUserEvents(user = "josephdburdick") {
  const url = `https://api.github.com/users/${user}/events?page=1&per_page=100`;
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

export {
  fetchUserRepos,
  fetchUserEvents
};
