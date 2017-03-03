import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: black
  display: block;
  margin: 0.5em 0;
  font-size: 14;
  font-family: Poppins;
  letter-spacing: 1;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;

export default StyledLink;
