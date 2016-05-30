import React from 'react';
import Header from './Header';
import s from './Layout.css';

class Layout extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.refs.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.refs.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref="root">
        <div className="mdl-layout__inner-container">
          <Header title={this.props.title}/>
          <div className={s['main-ribbon']}></div>
          <div className={`mdl-shadow--2dp ${s['resume-main']}`}>
            <div className="mdl-cell mdl-cell--12-col">
              <main {...this.props} className={s.content}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
