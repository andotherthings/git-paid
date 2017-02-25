import React from 'react';
import Radium from 'radium';

const styles = {
  base: {
    width: 110,
    height: 40,
    background: 'transparent',
    border: '1px solid grey',
    marginLeft: 20,
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: 3,
    color: 'grey',
    textTransform: 'uppercase',
    letterSpacing: 1,
    transition: '.3s ease-in-out',
    cursor: 'pointer'
  },

  info: {
    border: '1px solid #006699',
    color: '#006699',
  },

  warning: {
    border: '1px solid #d03a37',
    color: '#d03a37',
  },

  success: {
    border: '1px solid #37d087',
    color: '#37d087',
  }
}

@Radium
class Button extends React.Component {
  render() {
    return (
      <button
        style={[
          styles.base,
          this.props.type && styles[this.props.type],
        ]}>
        {this.props.children}
      </button>
    )
  }
}

export default Button;
