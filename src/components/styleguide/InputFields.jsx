import React from 'react';
import { Grid, Cell } from 'radium-grid';
import FormGroup from './../FormGroup';
import Select from './../Select';

const InputFields = () => {
  const { styles } = InputFields;
  return (
    <section>
      <div style={styles.headingContainer}>
        <h2>Input Fields and Text Areas</h2>
      </div>

      <Grid
        cellWidth="1/3"
        style={{background: '#1f1f1f', padding: '5% 10px'}} >

        <Cell width="1">
          <FormGroup
            type='text'
            label='Company Name'
            placeholder='Space X' />
        </Cell>

        <Cell width="1/2">
          <FormGroup
            type='text'
            label='tech stack'
            placeholder='[input] [tags] [here]' />
        </Cell>

        <Cell width="1/2">
          <FormGroup
            type='text'
            label='Job URL'
            placeholder='www.spacex.com/jobs/4242' />
        </Cell>

        <Cell>
          <FormGroup
            type='text'
            label='job title' />
        </Cell>

        <Cell>
          <Select
            label="state"
            options={[
              'WA',
              'CO',
              'NY',
              'IL'
            ]}
          />
        </Cell>

        <Cell>
          <FormGroup
            type='number'
            label='Compensation' />
        </Cell>
      </Grid>
    </section>
  );
}

InputFields.styles = {
  headingContainer: {
    background: 'white',
    padding: '40px 0',
    fontSize: 20,
    fontWeight: 300,
    letterSpacing: 1,
    color: '#454545',
    textAlign: 'center'
  }
}

export default InputFields;
