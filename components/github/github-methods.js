import {parseString} from 'xml2js';
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
        fetch(url).then(checkStatus).then(parseJSON).then((data) => resolve(data)).catch((error) => reject(error))
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
        fetch(url).then(checkStatus).then(parseJSON).then((data) => resolve(data)).catch((error) => reject(error))
      } catch (error) {
        reject(error);
      }
    });
  });
}

function cloneUserEvent(event) {
  return Object.assign({}, event)
}

function humanizeEventType(event) {
  let {type} = event;
  type = type.match(/([A-Z]?[^A-Z]*)/g) // group capitalized words (even singular ones)
    .slice(0,-1)
    .join('|').toLowerCase().split('|') // lower case them all
    .join(' '); // bring it all back together
  return type;
  // switch (event.type) {
  //   case 'CommitCommentEvent':
  //     return 'commit comment'
  //     break;
  //   case 'CreateEvent':
  //     return 'created'
  //     break;
  //   case 'DeleteEvent':
  //     return 'deleted'
  //     break;
  //   case 'DeploymentEvent':
  //     return 'deployed'
  //     break;
  //   case 'DeploymentStatusEvent':
  //     return 'updated deployment status'
  //     break;
  //   case 'DownloadEvent':
  //     return 'downloaded'
  //     break;
  //   case 'FollowEvent':
  //     return 'followed'
  //     break;
  //   case 'ForkEvent':
  //     return 'forked'
  //     break;
  //   case 'ForkApplyEvent':
  //     return 'applied fork'
  //     break;
  //   case 'GistEvent':
  //     return 'created/added a gist'
  //     break;
  //   case 'GollumEvent':
  //     return 'gollumed'
  //     break;
  //   case 'IssueCommentEvent':
  //     return 'commented on issue'
  //     break;
  //   case 'IssuesEvent':
  //     return 'created issue'
  //     break;
  //   case 'MemberEvent':
  //     return 'added/modified member'
  //     break;
  //   case 'MembershipEvent':
  //     return 'added/modified member'
  //     break;
  //   case 'PageBuildEvent':
  //     return 'built gh page'
  //     break;
  //   case 'PublicEvent':
  //     return 'open sourced'
  //     break;
  //   case 'PullRequestEvent':
  //     return 'sent pull request'
  //     break;
  //   case 'PullRequestReviewCommentEvent':
  //     return 'commented on pull request'
  //     break;
  //   case 'PushEvent':
  //     return 'pushed'
  //     break;
  //   case 'ReleaseEvent':
  //     return 'released'
  //     break;
  //   case 'RepositoryEvent':
  //     return 'edited repository'
  //     break;
  //   case 'StatusEvent':
  //     return 'changed the status of commit'
  //     break;
  //   case 'TeamAddEvent':
  //     return 'added team member'
  //     break;
  //   case 'WatchEvent':
  //     return 'watched'
  //     break;
  //   default:
  //     return 'did something'
  //     break;
  // }
}

export {
  fetchUserRepos,
  fetchUserEvents,
  cloneUserEvent,
  humanizeEventType
};
