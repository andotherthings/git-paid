import React from 'react';
import { Grid, Cell } from 'radium-grid';
import Button from './Button';
import FormGroup from './FormGroup';

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
                <div>
                  <select>
                    <option>Choose Interaction Type</option>
                    <option>Informational</option>
                    <option>Applied</option>
                    <option>Phone Screen</option>
                    <option>In Person Interview</option>
                    <option>Custom...</option>
                  </select>
                  <i>⊖</i>
                </div>

                <div>
                  <select>
                    <option>Choose Interaction Type</option>
                    <option>Informational</option>
                    <option>Applied</option>
                    <option>Phone Screen</option>
                    <option>In Person Interview</option>
                    <option>Custom...</option>
                  </select>
                  <i>⊖</i>
                </div>

                <div>
                  <select>
                    <option>Choose Interaction Type</option>
                    <option>Informational</option>
                    <option>Applied</option>
                    <option>Phone Screen</option>
                    <option>In Person Interview</option>
                    <option>Custom...</option>
                  </select>
                  <i>⨁</i>
                </div>
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
