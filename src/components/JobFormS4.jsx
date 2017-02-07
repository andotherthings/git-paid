import React from 'react';
import { Form, Select, Option, Label } from '../assets/styled-components/forms';

class JobFormS4 extends React.Component {
  render() {
    return (
      <section>
        <h2>Company Info</h2>
        <div>
          ⊙====⊙====⊙====Ⓞ===-⊙
        </div>
        <Form>
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

          <div>
            <button>Back</button>
            <button>Submit</button>
          </div>
        </Form>
      </section>
    );
  }
}

export default JobFormS4;
