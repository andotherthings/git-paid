import React from 'react';
import { Grid, Cell } from 'radium-grid';
import { Link } from 'react-router-dom';
import FormGroup from './FormGroup';
import Button from './Button';
import Address from './Address';

const JobFormS2 = (props) => {
  return (
    <section>
      <h2 style={{color: 'white'}}>Company Info</h2>

      <div>
        ⊙====Ⓞ==--⊙----⊙----⊙
      </div>

      <form>
        <Grid width="1">
          <Cell>
            <FormGroup
              name="company.name"
              value={ props.company.name }
              type="text"
              label="Company Name"
              placeholder="Space X"
              onChange={ props.handleUpdate } />
          </Cell>

          <Cell>
            <Address
              addressType="companyAddress"
              store={ props.companyAddress }
              handleUpdate={ props.handleUpdate } />
          </Cell>

          <Cell align="center">
            <Link to="/new-job">
              <Button type="warning">Back</Button>
            </Link>
            <Link to="/new-job/part3">
              <Button type="info">Next</Button>
            </Link>
          </Cell>
        </Grid>
      </form>
    </section>
  );
}

export default JobFormS2;
