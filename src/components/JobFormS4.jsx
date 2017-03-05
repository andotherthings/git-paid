import React from 'react';
import { Grid, Cell } from 'radium-grid';
import { Link } from 'react-router-dom';
import Button from './Button';
import FormGroup from './FormGroup';
import Select from './Select';

const JobFormS4 = (props) => {
  const { styles } = JobFormS4;
  const interactions = props.interactions.map((interaction, index) => {
    return (
      <Cell
        key={ index }>
        <Select
          value={ interaction }
          data={[
            'Choose Interaction Type',
            'Informational',
            'Applied',
            'Phone Screen',
            'In Person Interview',
            'Custom...'
          ]}
          data-index={ index }
          onChange={ props.handleUpdate } />
        <i>⨁</i>
        <i>⊖</i>
      </Cell>
    )
  });

  return (
    <section>
      <h2 style={styles.whiteText}>Company Info</h2>

      <div>
        ⊙====⊙====⊙====Ⓞ===-⊙
      </div>

      <form>
        <Grid width="1">
          <Cell>
            <label style={styles.whiteText}>Interactions:
              <Grid width="1">
                { interactions }
              </Grid>
            </label>
          </Cell>

          <Cell align="center">
            <Link to="/new-job/part3">
              <Button type="warning">Back</Button>
            </Link>
            <Link to="/">
              <Button
                type="success"
                onClick={ props.handleSubmit } >
                Submit
              </Button>
            </Link>
          </Cell>
        </Grid>
      </form>
    </section>
  );
}

JobFormS4.styles = {
  whiteText: {
    color: 'white'
  }
}

export default JobFormS4;
