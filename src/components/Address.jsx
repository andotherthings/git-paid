import React from 'react';
import { Grid, Cell } from 'radium-grid';
import FormGroup from './FormGroup';
import Select from './Select';
import Button from './Button';

class Address extends React.Component {
  render() {
    return (
      <section>
        <h3>Address:</h3>
        <Grid width="1/2">
          <Cell width="1">
            <FormGroup
              type="text"
              label="Street 1"
              placeholder="888 Western Ave" />
          </Cell>

          <Cell width="1">
            <FormGroup
              type="text"
              label="Street 2"
              placeholder="Suite 4242" />
          </Cell>

          <Cell>
            <FormGroup
              type="text"
              label="City"
              placeholder="Seattle" />
          </Cell>

          <Cell>
            <Select

            />
            <label>State:
              <select>
                <option value="foo">Foo</option>
                <option value="bar">Bar</option>
                <option value="baz">Baz</option>
              </select>
            </label>
          </Cell>

          <Cell>
            <FormGroup
              type="text"
              label="Zip"
              placeholder="80111" />
          </Cell>

          <Cell>
            <FormGroup
              type="text"
              label="Country"
              placeholder="Murica" />
          </Cell>
        </Grid>
      </section>
    );
  }
}

export default Address;
