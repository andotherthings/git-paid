import React from 'react';

const FormGroup = (props) => {
  console.log(props);
  const { label, ...rest } = props;
  const { styles } = FormGroup;

  function inputField() {
    if (props.placeholder === 'what are you looking for?') {
      return (
        <input
          { ...rest }
          style={ styles.blackText } />
      );
    } else {
      return (
        <input
          { ...rest }
          style={ styles.whiteText } />
      );
    }
  }

  return (
    <div style={ styles.inputContainer }>
      <label style={ styles.labelTitle }>
        { label }:
      </label>
      { inputField() }
      {/* <input
        { ...rest }
        style={ styles.inputStyle } /> */}
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

  whiteText: {
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

  blackText: {
    height: 34,
    width: '100%',
    background: 'transparent',
    padding: 10,
    border: '1px solid grey',
    fontSize: 16,
    fontWeight: 100,
    letterSpacing: .4,
    color: 'black',
  },
}

export default FormGroup;
