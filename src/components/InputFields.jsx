import React from 'react';
import Radium from 'radium';

const styles = {
  headingContainer: {
    padding: '40px 0 40px 50px',
    background: 'white',
    fontSize: 20,
    letterSpacing: 1,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center'
  },

  labelTitle: {
    display: 'block',
    color: 'white',
    paddingBottom: 5,
    paddingLeft: 2,
    fontFamily: 'Poppins',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 100,
    fontSize: 14
  },

  inputStyle: {
    background: 'none',
    border: '1px solid rgba(255, 255, 255, .2)',
    width: 200,
    height: 34,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 100,
    borderRadius: 0,
    letterSpacing: .7,
    textTransform: 'uppercase',
  },

  inputContainer: {
    position: 'relative',
    marginLeft: 30,
    marginBottom: 30,
    // textAlign: 'center'
  },

  placeholderText: {
    fontSize: 12,
    color: 'grey',
    top: 32,
    left: 8,
    position: 'absolute',
    textTransform: 'uppercase',
  }
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
            {/* In order to style the placeholder the way I wanted,
              I had to resort to a span tag. Someone will need to
              implement a 'handleFocus' function to
              hide it onFocus. 
              */}
            <span style={styles.placeholderText}>Google</span>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>job title</label>
            <span style={styles.placeholderText}>front-end engineer</span>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>


          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>job url</label>
            <span style={styles.placeholderText}>www.joblink.com</span>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>compensation</label>
            <span style={styles.placeholderText}>$80,000</span>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>street 1</label>
            <span style={styles.placeholderText}>111 S Jackson St</span>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>street 2</label>
            <span style={styles.placeholderText}>400 Broad St</span>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>city</label>
            <span style={styles.placeholderText}>seattle</span>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>

          <div style={styles.inputContainer}>
            <label style={styles.labelTitle}>zip</label>
            <span style={styles.placeholderText}>98105</span>
            <input onFocus={this.handleFocus} style={styles.inputStyle} type="text"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default InputFields;
