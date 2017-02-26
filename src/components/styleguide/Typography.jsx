import React from 'react';
import Radium from 'radium';
import { Grid, Cell } from 'radium-grid';

const TypographyComp = () => {
  const { styles } = TypographyComp;

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2>Typography</h2>
      </div>

      <Grid>
        <Cell width="1/3">
          <h2 style={styles.h2}>Main Heading</h2>
          <h3 style={styles.h3}>Sub Heading</h3>
          <h4 style={styles.h4}>Dashboard Column Heading</h4>
          <label style={styles.inputLabel}>input label</label>
        </Cell>

        <Cell width="2/3">
          <h2 style={styles.h2}>Job Posting, Interactions, Address</h2>
          <h3 style={styles.h3}>Technology, Industry</h3>
          <h4 style={styles.h4}>Company Name, Title, Industry</h4>
          <label style={styles.label}>company url, description</label>
        </Cell>
      </Grid>
    </section>
  );
}

TypographyComp.styles = {
  container: {
  },

  header: {
    padding: '40px 0',
    background: 'white',
    fontSize: 20,
    letterSpacing: .9,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center',
  },

  h2: {
    fontSize: 28,
    textTransform: 'uppercase',
    letterSpacing: 1,
    margin: '25px 0',
  },

  h3: {
    fontSize: 18.667,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  h4: {
    fontSize: 18,
    marginBottom: 25,
  },

  label: {
    fontSize: 14,
    fontFamily: 'Poppins',
    letterSpacing: 1,
    textTransform: 'uppercase',
  }

}

const Typography = Radium(TypographyComp);

export default Typography;
