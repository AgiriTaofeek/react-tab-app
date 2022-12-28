import React from 'react';
import JobInfo from './JobInfo';
import Button from './Button';

const Job = ({ title, company, dates, duties, jobs, onClick, value }) => {
  const btn = jobs.map((item, index) => {
    return (
      <Button
        onClick={() => onClick(index)}
        key={index}
        css={`job-btn ${index === value ? 'active-btn' : ''}`}
      >
        {item.company}
      </Button>
    );
  });
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn-container */}
        <div className="btn-container">{btn}</div>
        {/* job info */}
        <JobInfo
          title={title}
          company={company}
          dates={dates}
          duties={duties}
        />
      </div>
    </section>
  );
};

export default Job;
