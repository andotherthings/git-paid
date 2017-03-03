import React from 'react';
import Radium from 'radium';

const ButtonComp = (props) => {
  const { styles } = ButtonComp;
  return (
    <button
      onClick={ props.onClick }
      style={[
        styles.base,
        props.type && styles[props.type],
      ]}>
      {props.children}
    </button>
  )
}

ButtonComp.styles = {
  base: {
    width: 110,
    height: 40,
    background: 'transparent',
    border: '1px solid grey',
    margin: 10,
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: 3,
    color: 'grey',
    textTransform: 'uppercase',
    letterSpacing: 1,
    transition: '.3s ease-in-out',
    cursor: 'pointer'
  },

  rad: {
    border: '1px solid #B501D4',
    color: '#B501D4',
  },

  info: {
    border: '1px solid #006699',
    color: '#006699',
  },

  success: {
    border: '1px solid #37d087',
    color: '#37d087',
  },

  warning: {
    border: '1px solid #EDB220',
    color: '#EDB220',
  },

  danger: {
    border: '1px solid #d03a37',
    color: '#d03a37',
  },
}

const Button = Radium(ButtonComp);
export default Button;
