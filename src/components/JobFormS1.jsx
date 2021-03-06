import React from 'react';
import { Grid, Cell } from 'radium-grid';
import { Link } from 'react-router-dom';
import FormGroup from './FormGroup';
import Button from './Button';

const JobFormS1 = (props) => {
  return (
    <section>
      <h2 style={{color: 'white'}}>Job Posting</h2>

      <div>
        Ⓞ===-⊙----⊙----⊙----⊙
      </div>

      <form>
        <Grid width="1">
          <Cell>
            <FormGroup
              name="job.url"
              value={ props.job.url }
              type="text"
              label="Job URL"
              placeholder="www.spacex.com/jobs/4242"
              onChange={ props.handleUpdate } />
          </Cell>
          <Cell align="center">
            <Link to="/new-job/part2">
              <Button type="info">Next</Button>
            </Link>
          </Cell>
        </Grid>
      </form>
    </section>
  );
}

export default JobFormS1;
