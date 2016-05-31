import React, {Component, PropTypes} from 'react';
import moment from 'moment';
import _ from 'lodash';
import {
  fetchUserRepos,
  fetchUserEvents,
  deconstructUserEvent
} from './github-methods.js';

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
    fetchUserRepos(this.state.username).then((repos) => {
      this.setState({repos})
      this.setState({forks: repos.filter(repo => !!repo.fork)});
    });
    fetchUserEvents(this.state.username).then((events) => {
      this.setState({events});
      console.log(events);
    });
  }


  render() {
    const renderLastActivity = () => {
      const event = deconstructUserEvent(this.state.events[0]);
      const eventType = event.type.replace('Event','')
      return `Last Github activity: ${moment(event.created_at).fromNow()}`
    }
    const lastActivity = this.state.events.length ? renderLastActivity() : null;

    return (
      <div>
        {lastActivity}
      </div>
    );
  }

}

GithubBadge.PropTypes = {
  username: PropTypes.string.isRequired
};

export default GithubBadge;
