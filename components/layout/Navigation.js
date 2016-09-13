import React from 'react';
import {Link} from 'react-app';

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <nav className="mdl-navigation" ref="root">
        <a className="mdl-navigation__link" href="http://github.com/josephdburdick">Github</a>
        <a className="mdl-navigation__link" href="http://linkedin.com/in/josephdburdick">LinkedIn</a>
        <a className="mdl-navigation__link" href="mailto:josephdburdick@gmail.com?subject=Resume">Email</a>
      </nav>
    );
  }

}

export default Navigation;
