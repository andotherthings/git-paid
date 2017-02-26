import React from 'react';

const styles = {
  inputContainer: {
    width: '100%',
    padding: 10,
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

class FormGroup extends React.Component {
  render() {
    return (
      <div style={styles.inputContainer}>
        <label style={styles.labelTitle}>
          {this.props.label}:
        </label>
        <input
          type={this.props.type}
          placeholder={this.props.placeholder}
          onFocus={this.handleFocus}
          style={styles.inputStyle} />
      </div>
    )
  }
}

export default FormGroup;
