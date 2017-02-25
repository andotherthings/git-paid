import React from 'react';
import Radium from 'radium';
import FormGroup from './FormGroup';

const styles = {
  headingContainer: {
    background: 'white',
    padding: '40px 0 40px 50px',
    fontSize: 20,
    fontWeight: 300,
    letterSpacing: 1,
    color: '#454545',
    textAlign: 'center'
  },
}

@Radium
class InputFields extends React.Component {
  render() {
    return (
      <section>
        <div style={styles.headingContainer}>
          <h2>Input Fields and Text Areas</h2>
        </div>

        <div style={{background: '#1f1f1f', padding: '75px 20%', display: 'flex', flexWrap: 'wrap'}}>
          <FormGroup
            type='text'
            label='Company Name'
            placeholder='Space X' />

          <FormGroup
            type='text'
            label='Job Title'
            placeholder='Rocket Scientist' />

          <FormGroup
            type='text'
            label='Job URL'
            placeholder='www.spacex.com/jobs/4242' />

          <FormGroup
            type='number'
            label='Compensation' />
        </div>
      </section>
    );
  }
}

export default InputFields;
