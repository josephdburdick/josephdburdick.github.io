import React from 'react';
import Navigation from './Navigation';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    }
  }
  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <header ref="root" className="resume-header mdl-layout__header mdl-layout__header--scroll ">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">{this.props.name}</span>
          <div className="mdl-layout-spacer"></div>
          <div>
            <Navigation />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
