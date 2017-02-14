import React from 'react';
import Radium from 'radium';

const styles = {
  explanation: {
    marginTop: 75,
    marginLeft: 100
  },

  nav: {
    position: 'relative',
    marginTop: 75,
    height: 100,
    background: '#1f1f1f',
    marginBottom: 75
  },

  logo: {
    position: 'absolute',
    left: 60,
    color: 'white',
    fontWeight: 100,
    fontSize: 16,
    top: 45
  },

  signInButton: {
    position: 'absolute',
    right: 60,
    top: 30,
    background: 'none',
    fontSize: 14,
    width: 110,
    color: '#37d087',
    fontWeight: '300',
    height: 40,
    border: '1px solid rgba(255, 255, 255, .2)',

    ':hover': {
      border: '1px solid #37d087',
      cursor: 'pointer',
      transition: '.3s ease-in-out'
    }
  }
}

@Radium
class SigningUpNavBar extends React.Component {
  render() {
    return (
      <div>
        <h2 style={styles.explanation}>Navbar when a user is signing up</h2>
        <nav style={styles.nav}>
          <h1 style={styles.logo}>Git-Paid</h1>
          <button type="button" name="button" style={styles.signInButton}>Sign In</button>
        </nav>
      </div>
    );
  }
}

export default SigningUpNavBar;
