import React from 'react';
import Address from './Address';
import { Form, Input, Label } from '../assets/styled-components/forms';

class JobFormS3 extends React.Component {
  render() {
    return (
      <section>
        <h2>Job Info</h2>
        <div>
          ⊙====⊙====Ⓞ=---⊙----⊙
        </div>
        <Form>
          <Label fullwidth>Job Title:
            <Input type="text" />
          </Label>

          <Label fullwidth>Job Description:
            <Input type="textarea" />
          </Label>

          <Label fullwidth>Tech Stack:
            <Input type="text" />
          </Label>

          <Label>Industries:
            <Input type="text" />
          </Label>

          <Label>Compensation:
            <Input type="text" />
          </Label>

          <Address />

          <div>
            <button>Back</button>
            <button>Next</button>
          </div>
        </Form>
      </section>
    );
  }
}

export default JobFormS3;
