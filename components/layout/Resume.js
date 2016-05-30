import React, {Component, PropTypes} from 'react';

import _ from 'lodash';
import GithubBadge from './GithubBadge';


function isNullorEmpty(obj) {
  return obj !== undefined
    && obj !== null
    && Object.keys(obj).length === 0
    && obj.constructor === Object;
}

class Resume extends Component {
  render() {
    {/*
      This could be the mixture of 2 timelines:
      work experience and github commits.

      Projects could be 'associated' with your work history.

      Adoptive
      932,391,001 lines of code written.

      Insert summary here about Bundoo.
      • Bundoo: 501 commits (private)
      • Yale School of Medicine (public)
      All work could be synced with the inputed year for
    */}
    const loading = (<div>Loading...</div>);

    let jobs = [];
    _.forIn(this.props.experiences, (job, key) => jobs.push(job));

    function jobTemplate(job) {
      return (
        <li>{job.company}</li>
      )
    }

    const timeline = jobs.map((job) => {
      return jobTemplate(job);
    });


    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          {
            (isNullorEmpty( this.props.experiences )
              ? loading
              : timeline
            )
          }
        </div>
      </main>
    );
  }
}

export default Resume;
