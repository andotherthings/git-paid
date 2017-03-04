import React from 'react';
import { Grid, Cell } from 'radium-grid';
import { Route } from 'react-router-dom';
import StyleGuide from './styleguide/StyleGuide';
import Dashboard from './Dashboard';
import JobForm from './JobForm';
import JobProfile from './JobProfile';

class Main extends React.Component {
  render() {
    return (
      <Grid width="1">
        <Cell align="center">
          <main style={styles.base}>
            <Route exact path="/" component={Dashboard} />
            <Route path="/new-job" component={JobForm} />
            <Route path="/job/:id" component={JobProfile} />
            <Route path="/styles" component={StyleGuide} />
          </main>
        </Cell>
      </Grid>
    )
  }
}

const styles = {
  base: {
    width: 1024,
    minHeight: '100vh',
  }
}

export default Main;
