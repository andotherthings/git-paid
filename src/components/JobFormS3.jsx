import React from 'react';
import { Grid, Cell } from 'radium-grid';
import { Link } from 'react-router-dom';
import Address from './Address';
import Button from './Button';
import FormGroup from './FormGroup';

const JobFormS3 = (props) => {
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
              name="job.title"
              value={ props.job.title }
              type="text"
              label="Job Title"
              placeholder="Rocket Scientist"
              onChange={ props.handleUpdate } />
          </Cell>

          <Cell>
            <FormGroup
              name="job.description"
              value={ props.job.description }
              type="textarea"
              label="Job Description"
              placeholder="Ipsum Lorem"
              onChange={ props.handleUpdate } />
          </Cell>

          <Cell>
            <FormGroup
              name="job.techStack"
              value={ props.job.techStack }
              type="text"
              label="Tech Stack"
              placeholder="[react] [js]"
              onChange={ props.handleUpdate } />
          </Cell>

          <Cell width="2/3">
            <FormGroup
              name="job.industries"
              value={ props.job.industries }
              type="text"
              label="Industries"
              placeholder="[space] [radness]"
              onChange={ props.handleUpdate } />
          </Cell>

          <Cell width="1/3">
            <FormGroup
              name="job.compensation"
              value={ props.job.compensation }
              type="number"
              label="Compensation"
              placeholder="60000"
              onChange={ props.handleUpdate } />
          </Cell>

          <Cell>
            <Address
              addressType="jobAddress"
              store={ props.jobAddress }
              handleUpdate={ props.handleUpdate } />
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
