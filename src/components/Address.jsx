import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;
`;

const Input = styled.input`
  background-color: #F1F1F1;
  display: block;
  width: 100%;
`;

const Select = styled.select`
  display: block;
  width: 100%;
`;

const Option = styled.option`
`;

const Label = styled.label`
  grid-column: ${(props) => props.fullwidth ? '1 / span 2' : ''};
`;

class Address extends React.Component {
  render() {
    return (
      <Form>
        <h3>Address Component</h3>
        <Label fullwidth >Street 1:
          <Input type="text" fullwidth />
        </Label>

        <Label fullwidth >Street 2:
          <Input type="text" fullwidth />
        </Label>

        <Label>City:
          <Input type="text"/>
        </Label>

        <Label>State:
          <Select>
            <Option value="foo">Foo</Option>
            <Option value="bar">Bar</Option>
            <Option value="baz">Baz</Option>
          </Select>
        </Label>

        <Label>Zip:
          <Input type="text"/>
        </Label>

        <Label>Country:
          <Input type="text"/>
        </Label>
      </Form>
    )
  }
}

export default Address;
