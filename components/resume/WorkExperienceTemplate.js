import React from 'react';

export default function workExperienceTemplate () {
  let jobs = [];
  _.forIn(workExperience, (job, key) => jobs.push(job));

  function employmentTimespanTemplate(job) {
    return (
      <span>
        {job.employment.start}
        &nbsp;&mdash;&nbsp;
        {job.employment.end ? job.employment.end : 'PRESENT'}
      </span>
    )
  }

  function jobTemplate(job, key) {
    return (
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
  }

  function timeline() {
    return (
      <section>
        <header><h3>Experience</h3></header>
        <ul className="mdl-list">
          {
            jobs.map((job, key) => {
              return jobTemplate(job, key);
            })
          }
        </ul>
      </section>
    )
  }
  
  return timeline;
}
