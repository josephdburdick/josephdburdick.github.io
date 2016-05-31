import React, { Component, PropTypes } from 'react';
import Layout from '../layout/Layout.js';

function Content({ title, html }) {
  return (
    <Layout {...this.props}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

Content.propTypes = {
  title: React.PropTypes.string.isRequired,
  html: React.PropTypes.string.isRequired,
};

export default Content;
