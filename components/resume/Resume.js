import React, {Component, PropTypes} from 'react';
import Layout from '../layout/Layout';
import _ from 'lodash';
import GithubBadge from '../github/GithubBadge';
import s from './Resume.css';
function isNullorEmpty(obj) {
  return obj !== undefined
    && obj !== null
    && Object.keys(obj).length === 0
    && obj.constructor === Object;
}

class Resume extends Component {
  render() {
    const workExperience = require('./data/experience/index.js');
    const educationExperience = require('./data/education/index.js');
    const loading = (<div>Loading...</div>);

    let educationAchievements = [];
    const jobs = Object.values(workExperience).sort((a, b) => {
      if (!a.employment.end || !b.employment.end){
        return true;
      }
      return new Date(b.employment.end) - new Date(a.employment.end);
    });
    _.forIn(educationExperience, (achievements, key) => educationAchievements.push(achievements));

    function employmentTimespanTemplate(job) {
      return (
        <span>
          {job.employment.start}
          &nbsp;&mdash;&nbsp;
          {job.employment.end ? job.employment.end : 'PRESENT'}
        </span>
      )
    }

    const jobTemplate = (job, key) => (
      <li key={key} className={s.row}>
        <div className={`content-grid mdl-grid`}>
          <div className={s.col}>
            <strong className={s['text-upcase']}>{job.company}</strong>
          </div>
          <div className={s.col}>
            <span>{job.role}</span>
          </div>
          <div className={s.col}>
            {employmentTimespanTemplate(job)}
          </div>
          <div className={s.col} dangerouslySetInnerHTML={{ __html: job.html }} />
        </div>
      </li>
    )

    const workExperienceTimeline = (
      <section>
        <header><h3>Experience</h3></header>
        <ul className="mdl-list">
        {
          jobs.map((job, key) => jobTemplate(job, key))
        }
        </ul>
      </section>
    )

    const educationTimeline = (
      <section>
        <header><h3>Experience</h3></header>
        <ul className="mdl-list">
        {
          jobs.map((job, key) => jobTemplate(job, key))
        }
        </ul>
      </section>
    )

    return (
      <Layout {...this.props} className={s.resume}>
        <main className="mdl-layout__content">
          <div className="page-content">
            { isNullorEmpty( workExperience ) ? null : workExperienceTimeline }
            <GithubBadge {...this.props}/>
          </div>
        </main>
      </Layout>
    );
  }
}

export default Resume;
