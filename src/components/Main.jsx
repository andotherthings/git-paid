import React from 'react';
import Radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import { Route } from 'react-router-dom';
import StyleGuide from './styleguide/StyleGuide';
import Dashboard from './Dashboard';
import JobForm from './JobForm';

const MainComp = () => {
  const { styles } = MainComp;

  return (
    <Grid width="1">
      <Cell align="center">
        <main style={styles.base}>
          <Route exact path="/" component={Dashboard} />
          <Route path="/new-job" component={JobForm} />
          <Route path="/styles" component={StyleGuide} />
        </main>
      </Cell>
    </Grid>
  )
}

MainComp.styles = {
  base: {
    width: 1024,
    minHeight: '100vh',
  }
}

const Main = Radium(MainComp);

export default Main;
