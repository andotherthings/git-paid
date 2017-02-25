import React from 'react';
import Radium from 'radium';
import { Grid, Cell } from 'radium-grid';
import Button from './Button';

const styles = {
  headingContainer: {
    padding: '40px 0',
    background: 'white',
    fontSize: 20,
    letterSpacing: 1,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center'
  },
}

@Radium
class Buttons extends React.Component {
  render() {
    return (
      <section>
        <div style={styles.headingContainer}>
          <h2>Buttons</h2>
        </div>

        <div style={{display: 'flex', height: '300px'}}>
          <Grid width="1/2">
            <Cell align="center">
              <div style={{padding: '100px 0'}}>
                <div style={{marginBottom: '20px', textAlign: 'center'}}>
                  <Button>Default</Button>
                  <Button type="warning">Warning</Button>
                </div>

                <div style={{textAlign: 'center'}}>
                  <Button type='info'>Info</Button>
                  <Button type="success">Success</Button>
                </div>
              </div>
            </Cell>

            <Cell align='center'>
              <div style={{width: '100%', padding: '100px 0', background: '#202121'}}>
                <div style={{marginBottom: '20px', textAlign: 'center'}}>
                  <Button>Default</Button>
                  <Button type="warning">Warning</Button>
                </div>

                <div style={{textAlign: 'center'}}>
                  <Button type='info'>Info</Button>
                  <Button type="success">Success</Button>
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
      </section>
    );
  }
}

export default Buttons;
