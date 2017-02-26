import React from 'react';
import Radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import { Route } from 'react-router-dom';
import StyleGuide from './StyleGuide';
import Dashboard from './Dashboard';
import JobForm from './JobForm';

const styles = {
  base: {
    width: 1024,
  }
}

@Radium
class Main extends React.Component {
  render() {
    return (
      <Grid width="1">
        <Cell align="center">
          <main style={styles.base}>
            <Route exact path="/" component={Dashboard} />
            <Route path="/new-job" component={JobForm} />
            <StyleGuide />
          </main>
        </Cell>
      </Grid>
    )
  }
}

export default Main;
