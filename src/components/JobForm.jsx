import React from 'react';
import JobFormS1 from './JobFormS1';
import JobFormS2 from './JobFormS2';
import JobFormS3 from './JobFormS3';
import JobFormS4 from './JobFormS4';

class JobForm extends React.Component {
  render() {
    return (
      <section>
        <JobFormS1 />
        <JobFormS2 />
        <JobFormS3 />
        <JobFormS4 />
      </section>
    );
  }
}

export default JobForm;
