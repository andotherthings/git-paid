import React from 'react';
import { Grid, Cell } from 'radium-grid';
import Button from './Button';
import FormGroup from './FormGroup';

const Dashboard= () => {
  const { styles } = Dashboard;

  return (
    <section style={styles.section}>
      <Grid width="1/4">
        <Cell align="left">
          <FormGroup
            type="text"
            label="search"
            placeholder="what are you looking for?" />
        </Cell>

        <Cell align="right" width="3/4">
          <Button type="info">Add new</Button>
        </Cell>
      </Grid>

      <header style={styles.header}>
        <Grid width="1/3">
          <Cell>
            Company Name
          </Cell>

          <Cell>
            Job Title
          </Cell>

          <Cell>
            Industries
          </Cell>
        </Grid>
      </header>

      <article style={styles.tableRow}>
        <Grid width="1/3">
          <Cell>
            SpaceX
          </Cell>

          <Cell>
            Software Engineer
          </Cell>

          <Cell>
            [Space] [IoT] [Communication] ...
          </Cell>
        </Grid>
      </article>
    </section>
  )
}

Dashboard.styles = {
  section: {
    marginBottom: 20,
  },

  header: {
    backgroundColor: '#006699',
    padding: 8,
    color: 'white',
  },

  tableRow: {
    padding: 8,
  },
}

export default Dashboard;
