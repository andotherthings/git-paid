import React from 'react';
import { Input, Select, Option, Label } from '../assets/styled-components/forms';

class Address extends React.Component {
  render() {
    return (
      <section>
        <h3>Address Component</h3>
        <Label fullwidth >Street 1:
          <Input type="text" fullwidth />
        </Label>

        <Label fullwidth >Street 2:
          <Input type="text" fullwidth />
        </Label>

        <Label>City:
          <Input type="text" />
        </Label>

        <Label>State:
          <Select>
            <Option value="foo">Foo</Option>
            <Option value="bar">Bar</Option>
            <Option value="baz">Baz</Option>
          </Select>
        </Label>

        <Label>Zip:
          <Input type="text" />
        </Label>

        <Label>Country:
          <Input type="text" />
        </Label>
      </section>
    );
  }
}

export default Address;
