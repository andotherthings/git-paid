import React from 'react';
import JobForm from './JobForm';
import Landing from './Landing';

class App extends React.Component {
  render() {
    return (
      <div>
        <Landing />
        <JobForm />
      </div>
    );
  }
}

export default App;
