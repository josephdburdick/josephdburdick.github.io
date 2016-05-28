import React, { PropTypes } from 'react';
import Layout from '../layout/Layout.js';
import Resume from '../layout/Resume.js';

function Content({ title, html }) {
  return (
    <Layout>
      <Resume/>
    </Layout>
  );
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
};

export default Content;
