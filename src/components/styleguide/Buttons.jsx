import React from 'react';
import { Grid, Cell } from 'radium-grid';
import Button from './../Button';

const Buttons = () => {
  const { styles } = Buttons;
  return (
    <section>
      <div style={styles.headingContainer}>
        <h2>Buttons</h2>
      </div>

      <div style={{display: 'flex', height: '300px'}}>
        <Grid width="1/2">
          <Cell align="center">
            <div style={{padding: '12% 0'}}>
              <div>
                <Button>Default</Button>
                <Button type="success">Success</Button>
              </div>

              <div>
                <Button type='rad'>Rad</Button>
                <Button type="warning">Warning</Button>
              </div>

              <div>
                <Button type='info'>Info</Button>
                <Button type="danger">Danger</Button>
              </div>
            </div>
          </Cell>

          <Cell align='center'>
            <div style={{width: '100%', height: '100%', padding: '12% 0', background: '#202121'}}>
              <div style={{textAlign: 'center'}}>
                <Button>Default</Button>
                <Button type="success">Success</Button>
              </div>

              <div style={{textAlign: 'center'}}>
                <Button type='rad'>Rad</Button>
                <Button type="warning">Warning</Button>
              </div>

              <div style={{textAlign: 'center'}}>
                <Button type='info'>Info</Button>
                <Button type="danger">Danger</Button>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    </section>
  );
}

Buttons.styles = {
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

export default Buttons;
