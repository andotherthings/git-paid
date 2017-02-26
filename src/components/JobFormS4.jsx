import React from 'react';
import { Grid, Cell } from 'radium-grid';
import Button from './Button';
import FormGroup from './FormGroup';
import Select from './Select';

class JobFormS4 extends React.Component {
  render() {
    return (
      <section>
        <h2>Company Info</h2>
        <div>
          ⊙====⊙====⊙====Ⓞ===-⊙
        </div>
        <form>
          <Grid width="1">
            <Cell>
              <label>Interactions:
                <Grid width="1">
                  <Cell>
                    <Select
                      label="interactions"
                      options={[
                        'Choose Interaction Type',
                        'Informational',
                        'Applied',
                        'Phone Screen',
                        'In Person Interview',
                        'Custom...'
                      ]}>
                    </Select>
                    <i>⊖</i>
                  </Cell>

                  <Cell>
                    <Select
                      label="interactions"
                      options={[
                        'Choose Interaction Type',
                        'Informational',
                        'Applied',
                        'Phone Screen',
                        'In Person Interview',
                        'Custom...',
                      ]}
                    />
                    <i>⨁</i>
                  </Cell>
                </Grid>
              </label>
            </Cell>

            <Cell align="center">
              <Button type="warning">Back</Button>
              <Button type="success">Submit</Button>
            </Cell>
          </Grid>
        </form>
      </section>
    );
  }
}

export default JobFormS4;
