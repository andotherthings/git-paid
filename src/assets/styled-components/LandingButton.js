import styled from 'styled-components';

const LandingButton = styled.button`
  color: ${props => props.theme.color};
  background: ${props => props.theme.background};
  font-size: 20px;
  ${''/* margin: 60px 0 40px 0; */}
  padding: 10px;
  border: 2px solid ${props => props.theme.borderColor};
  border-radius: 5px;
  width: 90%;
  display:block;
  margin: 50px auto;
`;


export default LandingButton;
