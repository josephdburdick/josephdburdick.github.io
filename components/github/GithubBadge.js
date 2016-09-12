import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import _ from 'lodash';
import * as ghMethods from './github-methods.js';
import s from '../layout/Layout.css';

class GithubBadge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.accounts.github,
      repos: [],
      forks: [],
      events: []
    }
  }

  componentWillMount() {
    ghMethods.fetchUserRepos(this.state.username).then((repos) => {
      this.setState({repos})
      this.setState({forks: repos.filter(repo => !!repo.fork)});
    });
    ghMethods.fetchUserEvents(this.state.username).then((events) => {
      this.setState({events});
    });
  }

  render() {
    let latestEvent = ghMethods.cloneUserEvent(this.state.events[0]);
    const renderLastActivity = () => {
      const eventType = ghMethods.humanizeEventType(latestEvent);
      const action = latestEvent.payload.action ? latestEvent.payload.action : null;
      const {repo} = latestEvent;
      return (
        <div className={s.row}>
          <div className={s.col}>
            <small>Latest Github activity:</small>
          </div>
          <div className={s.col}>
            <small>
              <a href={`https://github.com/${this.state.username}?tab=activity`} target="_blank">{this.state.username}</a> {action} {eventType} <a href={repo.url} target="_blank">{repo.name.toLowerCase()}</a>
              <br/>@ <a href={`https://github.com/${this.state.username}?tab=activity`} target="_blank">{moment(latestEvent.created_at).fromNow()}</a>
            </small>
          </div>
        </div>
      )
    }

    const lastActivity = this.state.events.length ? renderLastActivity() : null;

    return (
      <section>
        {lastActivity}
      </section>
    );
  }

}

GithubBadge.PropTypes = {
  username: PropTypes.string.isRequired
};

export default GithubBadge;
