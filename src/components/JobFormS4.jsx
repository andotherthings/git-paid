import React from 'react';
import { Grid, Cell } from 'radium-grid';
import Button from './Button';
import FormGroup from './FormGroup';
import { Form, Select, Option, Label } from '../assets/styled-components/forms';

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
              <Label fullwidth>Interactions:
                <div>
                  <Select>
                    <Option>Choose Interaction Type</Option>
                    <Option>Informational</Option>
                    <Option>Applied</Option>
                    <Option>Phone Screen</Option>
                    <Option>In Person Interview</Option>
                    <Option>Custom...</Option>
                  </Select>
                  <i>⊖</i>
                </div>

                <div>
                  <Select>
                    <Option>Choose Interaction Type</Option>
                    <Option>Informational</Option>
                    <Option>Applied</Option>
                    <Option>Phone Screen</Option>
                    <Option>In Person Interview</Option>
                    <Option>Custom...</Option>
                  </Select>
                  <i>⊖</i>
                </div>

                <div>
                  <Select>
                    <Option>Choose Interaction Type</Option>
                    <Option>Informational</Option>
                    <Option>Applied</Option>
                    <Option>Phone Screen</Option>
                    <Option>In Person Interview</Option>
                    <Option>Custom...</Option>
                  </Select>
                  <i>⨁</i>
                </div>
              </Label>
            </Cell>

            <Cell align="center">
              <Button>Back</Button>
              <Button>Submit</Button>
            </Cell>
          </Grid>
        </form>
      </section>
    );
  }
}

export default JobFormS4;
