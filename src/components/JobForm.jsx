import React from 'react';
import { Route } from 'react-router-dom';
import JobFormS1 from './JobFormS1';
import JobFormS2 from './JobFormS2';
import JobFormS3 from './JobFormS3';
import JobFormS4 from './JobFormS4';

class JobForm extends React.Component {
  render() {
    return (
      <section style={{background: '#1f1f1f', padding: 10}}>
        <Route exact path="/new-job" component={JobFormS1} />
        <Route path="/new-job/part2" component={JobFormS2} />
        <Route path="/new-job/part3" component={JobFormS3} />
        <Route path="/new-job/part4" component={JobFormS4} />
      </section>
    );
  }
}

export default JobForm;
