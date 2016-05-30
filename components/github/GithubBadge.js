import React, {Component, PropTypes} from 'react';
import _ from 'lodash';
import {fetchUserRepos, fetchUserEvents} from './github-methods.js';

class GithubBadge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username,
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
      <table ref="root" className="mdl-data-table mdl-js-data-table">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Name</th>
            <th className="mdl-data-table__cell--non-numeric">Nickname</th>
            <th>Age</th>
            <th className="mdl-data-table__cell--non-numeric">Living?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">John Lennon</td>
            <td className="mdl-data-table__cell--non-numeric">The smart one</td>
            <td>40</td>
            <td className="mdl-data-table__cell--non-numeric">No</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Paul McCartney</td>
            <td className="mdl-data-table__cell--non-numeric">The cute one</td>
            <td>73</td>
            <td className="mdl-data-table__cell--non-numeric">Yes</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">George Harrison</td>
            <td className="mdl-data-table__cell--non-numeric">The shy one</td>
            <td>58</td>
            <td className="mdl-data-table__cell--non-numeric">No</td>
          </tr>
          <tr>
            <td className="mdl-data-table__cell--non-numeric">Ringo Starr</td>
            <td className="mdl-data-table__cell--non-numeric">The funny one</td>
            <td>74</td>
            <td className="mdl-data-table__cell--non-numeric">Yes</td>
          </tr>
        </tbody>
      </table>
    );
  }

}

GithubBadge.PropTypes = {
  username: PropTypes.string.isRequired
};

export default GithubBadge;
