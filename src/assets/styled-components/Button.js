import styled from 'styled-components';

const Button = styled.button`
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.borderColor};
  border-radius: 3px;
  width: 90%;
`;


export default Button;
