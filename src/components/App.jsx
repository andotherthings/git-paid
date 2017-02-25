import React from 'react';
import StyleGuide from './StyleGuide';
import JobForm from './JobForm';
import { StyleRoot } from 'radium';
import { Grid } from 'radium-grid';

class App extends React.Component {
  render() {
    return (
      <div>
        <StyleRoot>
          <Grid>
            <h1>App Component</h1>
            <StyleGuide />
            <JobForm />
          </Grid>
        </StyleRoot>
      </div>
    );
  }
}

export default App;
