import React from 'react';
import { Grid, Cell } from 'radium-grid';
import { Link } from 'react-router-dom';
import Address from './Address';
import Button from './Button';
import FormGroup from './FormGroup';

const JobFormS3 = () => {
  return (
    <section>
      <h2 style={{color: 'white'}}>Job Info</h2>
      <div>
        ⊙====⊙====Ⓞ=---⊙----⊙
      </div>
      <form>
        <Grid width="1">
          <Cell>
            <FormGroup
              type="text"
              label="Job Title"
              placeholder="Rocket Scientist" />
          </Cell>

          <Cell>
            <FormGroup
              type="textarea"
              label="Job Description"
              placeholder="Ipsum Lorem" />
          </Cell>

          <Cell>
            <FormGroup
              type="text"
              label="Tech Stack"
              placeholder="[react] [js]" />
          </Cell>

          <Cell width="2/3">
            <FormGroup
              type="text"
              label="Industries"
              placeholder="[space] [radness]" />
          </Cell>

          <Cell width="1/3">
            <FormGroup
              type="number"
              label="Compensation"
              placeholder="60000" />
          </Cell>

          <Cell>
            <Address />
          </Cell>

          <Cell align="center">
            <Link to="/new-job/part2">
              <Button type="warning">Back</Button>
            </Link>
            <Link to="/new-job/part4">
              <Button type="info">Next</Button>
            </Link>
          </Cell>
        </Grid>
      </form>
    </section>
  );
}

export default JobFormS3;
