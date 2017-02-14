import styled from 'styled-components';

const styles = {
  Form : styled.form`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 10px;
    background-color: purple;
  `,

  Input : styled.input`
    background-color: #F1F1F1;
    display: block;
    width: 100%;
  `,

  Select : styled.select`
    display: block;
    width: 100%;
  `,

  Option : styled.option`
  `,

  Label : styled.label`
    grid-column: ${props => props.fullwidth ? '1 / span 2' : ''};
  `,

}

module.exports = styles;
