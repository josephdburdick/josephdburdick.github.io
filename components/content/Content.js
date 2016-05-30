import React, { PropTypes } from 'react';
import Layout from '../layout/Layout.js';
import Resume from '../layout/Resume.js';

function Content({ title, html }) {
  const experienceData = require('../../routes/experience/index.js');
  return (
    <Layout>
      <Resume experiences={experienceData} />
    </Layout>
  );
}

Content.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired
};

export default Content;
