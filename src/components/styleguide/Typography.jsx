import React from 'react';
import Radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import H2 from '../H2';
import H3 from '../H3';
import H4 from '../H4';
import Label from '../Label';
const TypographyComp = () => {
  const { styles } = TypographyComp;

  return (
    <section style={styles.container}>
      <div style={styles.header}>
        <h2>Typography</h2>
      </div>

      <Grid align="center">
        <Grid width="1" style={{background: '#37d087', padding: '20px 0', color: '#fff', borderBottom: '1px solid lightgrey'}}>
          <Cell width="1/4"   align="left" style={{marginLeft: '15px'}}>
            <h1>Main Heading</h1>
          </Cell>
          <Cell width="1/4"  align="left" style={{marginLeft: '10px'}}>
            <h1>Sub Heading</h1>
          </Cell>
          <Cell width="1/4" align="right">
            <h1>Dashboard Column Heading</h1>
          </Cell>
          <Cell width="1/4"  align="center" style={{marginLeft: '15px'}}>
            <h1>Input Label</h1>
          </Cell>

        </Grid>
        <Cell width="1/4" style={{marginTop: '20px'}}>
          <Grid align="left" style={{marginLeft: '10px'}}>
            <Cell width="1">
              <H2>Technology</H2>
            </Cell>
            <Cell width="1">
              <H2>Industry</H2>
            </Cell>
          </Grid>

        </Cell>

        <Cell width="1/4" style={{marginTop: '30px'}}>
          <Grid align="left">
            <Cell width="1">
              <H3>Technology</H3>
            </Cell>
            <Cell width="1">
              <H3>Industry</H3>
            </Cell>
          </Grid>
        </Cell>

        <Cell width="1/4" style={{marginTop: '30px'}}>
          <Grid align="left" style={{marginLeft: '35px'}}>
            <Cell width="1">
              <H4>Technology</H4>
            </Cell>
            <Cell width="1">
              <H4>Industry</H4>
            </Cell>
          </Grid>
        </Cell>

        <Cell width="1/4" style={{marginTop: '35px'}}>
          <Grid align="left" style={{marginRight: '-150px'}}>
            <Cell width="1">
              <Label>Technology</Label>
            </Cell>
            <Cell width="1">
              <Label>Industry</Label>
            </Cell>
          </Grid>
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
