import React from 'react';
import { Grid, Cell } from 'radium-grid';
import FormGroup from './FormGroup';
import Button from './Button';

class JobFormS1 extends React.Component {
  render() {
    return (
      <section>
        <h2>Job Posting</h2>
        <div>
          Ⓞ===-⊙----⊙----⊙----⊙
        </div>
        <form>
          <Grid width="1">
            <Cell>
              <FormGroup
                type="text"
                label="Job URL"
                placeholder="www.spacex.com/jobs/4242" />
            </Cell>
            <Cell align="center">
              <Button type="info">Next</Button>
            </Cell>
          </Grid>
        </form>
      </section>
    );
  }
}

export default JobFormS1;
