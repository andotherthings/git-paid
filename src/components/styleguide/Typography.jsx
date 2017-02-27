import React from 'react';
import Radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import H2 from './H2';
import H3 from './H3';
import H4 from './H4';
import Label from './Label';
const TypographyComp = () => {
  const { styles } = TypographyComp;

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2>Typography</h2>
      </div>

      <Grid align="center">
        <Grid width="1" align="center" style={{background: '#37d087', padding: '20px 0', color: '#fff', borderBottom: '1px solid lightgrey'}}>
          <Cell width="1/4">
            <h1>Main Heading</h1>
          </Cell>
          <Cell width="1/4">
            <h1>Sub Heading</h1>
          </Cell>
          <Cell width="1/4">
            <h1>Dashboard Column Heading</h1>
          </Cell>
          <Cell width="1/4">
            <h1>Input Label</h1>
          </Cell>

        </Grid>
        <Cell width="1/4" style={{marginTop: '20px'}}>
          <H2 />
        </Cell>

        <Cell width="1/4" style={{marginTop: '30px'}}>
          <H3 />
        </Cell>

        <Cell width="1/4" style={{marginTop: '30px'}}>
          <H4 />
        </Cell>

        <Cell width="1/4" style={{marginTop: '35px'}}>
          <Label />
        </Cell>
      </Grid>
    </section>
  );
}

TypographyComp.styles = {
  header: {
    padding: '40px 0',
    background: 'white',
    fontSize: 20,
    letterSpacing: .9,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center',
  }
}

// const Typography = Radium(TypographyComp);

export default TypographyComp;
