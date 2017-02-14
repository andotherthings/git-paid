import React from 'react';
import Radium from 'radium';

const styles = {
  landingPageType: {
    marginLeft: 100
  },

  loginContainer: {
    height: '100vh',
    width: '100vw',
    textAlign: 'center'
  },

  loginLogo: {
    fontSize: 82,
    marginTop: 250,
    marginBottom: 25,
    color: '#37d087'
  },

  slogan: {
    marginBottom: 50
  },

  signUpButton: {
    fontSize: 14,
    background: '#37d087',
    height: 55,
    width: 160,
    color: 'white',
    border: 'none'
  }
}

@Radium
class Register extends React.Component {
  render() {
    return (
      <div>
        <h2 style={styles.landingPageType}>Register</h2>

        <div style={styles.loginContainer}>
          <h2 style={styles.loginLogo}>Git-Paid</h2>
          <p style={styles.slogan}>Keep track of your job search. Let's get paid.</p>
          <button type="button" name="button" style={styles.signUpButton}>Sign up</button>
        </div>
      </div>
    );
  }
}

export default Register;
