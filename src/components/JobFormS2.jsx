import React from 'react';
import Address from './Address';
import { Form, Input, Label } from '../assets/styled-components/forms';

class JobFormS2 extends React.Component {
  render() {
    return (
      <section>
        <h2>Company Info</h2>
        <div>
          ⊙====Ⓞ==--⊙----⊙----⊙
        </div>
        <Form>
          <Label fullwidth>Company Name:
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

export default JobFormS2;
