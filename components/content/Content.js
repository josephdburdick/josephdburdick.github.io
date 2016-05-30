import React, { Component, PropTypes } from 'react';
import Layout from '../layout/Layout.js';

class Content extends Component {
  render() {
    return (
      <Layout {...this.props}>
        <header><h3>{title}</h3></header>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    )
  }
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
};

export default Content;
