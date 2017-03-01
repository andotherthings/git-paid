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
              value={ this.props.store.street1 }
              name={ `${this.props.addressType}.street1` }
              type="text"
              label="Street 1"
              placeholder="888 Western Ave"
              onChange={ this.props.updateState } />
          </Cell>

          <Cell width="1">
            <FormGroup
              value={ this.props.store.street2 }
              name={ `${this.props.addressType}.street2` }
              type="text"
              label="Street 2"
              placeholder="Suite 4242"
              onChange={ this.props.updateState } />
          </Cell>

          <Cell>
            <FormGroup
              value={ this.props.store.city }
              name={ `${this.props.addressType}.city` }
              type="text"
              label="City"
              placeholder="Seattle"
              onChange={ this.props.updateState } />
          </Cell>

          <Cell>
            <Select
              value={ this.props.store.state }
              name={ `${this.props.addressType}.state` }
              label="state"
              options={[
                'WA',
                'CO',
                'NY',
                'IL'
              ]}
              update={ this.props.updateState } />
          </Cell>

          <Cell>
            <FormGroup
              value={ this.props.store.zip }
              name={ `${this.props.addressType}.zip` }
              type="number"
              label="Zip"
              placeholder="80111"
              onChange={ this.props.updateState } />
          </Cell>

          <Cell>
            <FormGroup
              value={ this.props.store.country }
              name={ `${this.props.addressType}.country` }
              type="text"
              label="Country"
              placeholder="Murica"
              onChange={ this.props.updateState } />
          </Cell>
        </Grid>
      </section>
    );
  }
}

export default Address;
