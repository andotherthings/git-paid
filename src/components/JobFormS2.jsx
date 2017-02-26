import React from 'react';
import { Grid, Cell } from 'radium-grid';
import FormGroup from './FormGroup';
import Button from './Button';
import Address from './Address';

class JobFormS2 extends React.Component {
  render() {
    return (
      <section>
        <h2>Company Info</h2>
        <div>
          ⊙====Ⓞ==--⊙----⊙----⊙
        </div>
        <form>
          <Grid width="1">
            <Cell>
              <FormGroup
                type="text"
                label="Company Name"
                placeholder="Space X" />
            </Cell>

            <Cell>
              <Address />
            </Cell>

            <Cell align="center">
              <Button type="warning">Back</Button>
              <Button type="info">Next</Button>
            </Cell>
          </Grid>
        </form>
      </section>
    );
  }
}

export default JobFormS2;
