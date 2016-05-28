import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import {
  fetchUserRepos,
  fetchUserEvents
} from '../content/github.js';
class Resume extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
      forks: [],
      events: []
    }
  }
  componentWillMount() {
    fetchUserRepos().then((repos) => this.setState({repos}));
    fetchUserEvents().then((events) => this.setState({events}));
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <main>{JSON.stringify(this.state.events)}</main>
    );
  }

}

Resume.PropTypes = {
  repos: PropTypes.array.isRequired
};

export default Resume;
