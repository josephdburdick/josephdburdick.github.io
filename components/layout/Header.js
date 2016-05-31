import React from 'react';
import Navigation from './Navigation';
class Header extends React.Component {
  // componentDidMount() {
  //   window.componentHandler.upgradeElement(this.refs.root);
  // }
  //
  // componentWillUnmount() {
  //   window.componentHandler.downgradeElements(this.refs.root);
  // }
  /*
    */

  render() {
    return (
      <div ref="root" className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="resume-header mdl-layout__header mdl-layout__header--scroll ">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">{this.props.name}</span>
            <div className="mdl-layout-spacer"></div>
            <div>
              <Navigation/>
            </div>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Acme</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="#">Products</a>
            <a className="mdl-navigation__link" href="#">Services</a>
            <a className="mdl-navigation__link" href="#">Portfolios</a>
            <a className="mdl-navigation__link" href="#">Achievements</a>
            <a className="mdl-navigation__link" href="#">Blog</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
