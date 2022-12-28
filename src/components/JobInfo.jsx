import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const JobInfo = ({ title, company, dates, duties}) => {
  const Duties = duties.map((duty,i) => {
    return (
      <div key={i} className="job-desc">
        <FaAngleDoubleRight className="job-icon" />
        <p>{duty}</p>
      </div>
    );
  });
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="job-date"> {dates}</p>
      {Duties}
    </article>
  );
};

export default JobInfo;
