import React from 'react';
import Radium from 'radium';

const styles = {
  headingContainer: {
    background: 'white',
    padding: '40px 0 40px 50px',
    fontSize: 20,
    fontWeight: 300,
    letterSpacing: 1,
    color: '#454545',
    textAlign: 'center'
  },

  labelTitle: {
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
    width: 200,
    height: 34,
    background: 'transparent',
    paddingLeft: 10,
    border: '1px solid grey',
    borderRadius: 0,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 100,
    letterSpacing: .7,
    color: 'white',
  },

  inputContainer: {
    position: 'relative',
    marginBottom: 30,
    marginLeft: 30,
  },
}

@Radium
class InputFields extends React.Component {
  render() {
    return (
      <section>
        <div style={styles.headingContainer}>
          <h2>Input Fields and Text Areas</h2>
        </div>

        <div style={{background: '#1f1f1f', padding: '75px 20%', display: 'flex', flexWrap: 'wrap'}}>
          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>company name</label>
              <input placeholder="Space X" onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>job title</label>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>


          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>job url</label>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>compensation</label>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default InputFields;
