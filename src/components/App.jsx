import React from 'react';
import JobForm from './JobForm';
import StyleGuide from './StyleGuide';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>App Component</h1>
        <JobForm />
        <StyleGuide />
      </div>
    );
  }
}

export default App;
