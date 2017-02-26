import React from 'react';
import Radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import StyleGuide from './StyleGuide';
import JobForm from './JobForm';

const styles = {
  base: {
    width: '1024',
  }
}

@Radium
class Main extends React.Component {
  render() {
    return (
      <Grid width="1">
        <Cell align="center">
          <main style={styles.base}>
            <h1>App Component</h1>
            <StyleGuide />
            <JobForm />
          </main>
        </Cell>
      </Grid>
    )
  }
}

export default Main;
