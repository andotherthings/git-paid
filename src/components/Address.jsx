import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 10px;

  padding: 20px;
  border: 1px solid black;
`;

const Input = styled.input`
  margin-right: 10px;
  padding: 10px;
  background-color: #edf4e8;
  display: block;
  width: 100%;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  background-repeat: no-repeat;
  background-size: .85em auto;
  background-position: right 0.6em center;
  padding: 10px;
  border-radius: 0;
  border: 0;
  background-color: #edf4e8;
  background-image: url("data:image/svg+xml;charset=utf-8, \
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 40'> \
      <polygon points='0,0 60,0 30,40' style='fill:black;'/> \
    </svg>");
`;

const Option = styled.option`
  padding: 10px;
`;

const Label = styled.label`
  grid-column: ${(props) => props.fullwidth ? '1 / span 2' : ''};
`;

class Address extends React.Component {
  render() {
    return (
      <Form>
        <h3>Address</h3>
        <Label fullwidth >Street 1:
          <Input type="text" placeholder="400 Broad St" fullwidth />
        </Label>

        <Label fullwidth >Street 2:
          <Input type="text" fullwidth />
        </Label>

        <Label>City:
          <Input type="text"/>
        </Label>

        <Label>State:
          <Select>
            <Option value="bob">Bob</Option>
            <Option value="foo">Foo</Option>
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
