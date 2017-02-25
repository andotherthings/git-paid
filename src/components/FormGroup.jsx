import React from 'react';

const styles = {
  inputContainer: {
    width: '50em',
    marginLeft: 30,
  },

  labelTitle: {
    width: '100%',
    display: 'block',
    paddingBottom: 5,
    paddingLeft: 2,
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 100,
    letterSpacing: 1,
    color: 'white',
    textTransform: 'uppercase',
  },

  inputStyle: {
    height: 34,
    width: '100%',
    background: 'transparent',
    paddingLeft: 10,
    border: '1px solid grey',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 100,
    letterSpacing: .4,
    color: 'white',
  },
}

class FormGroup extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.inputContainer}>
          <label style={styles.labelTitle}>
            {this.props.label}
          </label>
          <input
            type={this.props.type}
            placeholder={this.props.placeholder}
            onFocus={this.handleFocus}
            style={styles.inputStyle} />
        </div>
      </div>
    )
  }
}

export default FormGroup;
