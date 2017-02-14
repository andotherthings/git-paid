import React from 'react';
import { Form, Input, Label } from '../assets/styled-components/forms';

class JobFormS1 extends React.Component {
  render() {
    return (
      <section>
        <h2>Job Posting</h2>
        <div>
          Ⓞ===-⊙----⊙----⊙----⊙
        </div>
        <Form>
          <Label fullwidth>Job URL:
            <Input type="text" />
          </Label>
          <button>Next</button>
        </Form>
      </section>
    );
  }
}

export default JobFormS1;
