import React from 'react';

const FormGroup = (props) => {
  const { label } = props
  const { styles } = FormGroup;

  return (
    <div style={ styles.inputContainer }>
      <label style={ styles.labelTitle }>
        { label }:
      </label>
      <input
        { ...props }
        style={ styles.inputStyle } />
    </div>
  )
}

FormGroup.styles = {
  inputContainer: {
    width: '100%',
    margin: '10px 10px 10px 0',
  },

  labelTitle: {
    display: 'block',
    paddingBottom: 5,
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 100,
    letterSpacing: .4,
    color: 'white',
    textTransform: 'uppercase',
  },

  inputStyle: {
    height: 34,
    width: '100%',
    background: 'transparent',
    padding: 10,
    border: '1px solid grey',
    fontSize: 16,
    fontWeight: 100,
    letterSpacing: .4,
    color: 'white',
  },
}

export default FormGroup;
