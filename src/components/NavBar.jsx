import React from 'react';
import Radium from 'radium';
import SigningUpNavBar from './SigningUpNavBar';
import LoggingInNavBar from './LoggingInNavBar';
import LoggedInNavBar from './LoggedInNavBar';

const styles = {
  headingContainer: {
    padding: '40px 0 40px 50px',
    background: 'white',
    fontSize: 20,
    letterSpacing: .9,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center'
  },

  nav: {
    position: 'relative',
    marginTop: 75,
    height: 100,
    background: '#1f1f1f',
    marginBottom: 75
  },

  signUpButton: {
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
  },

  logo: {
    position: 'absolute',
    left: 60,
    color: 'white',
    fontWeight: 100,
    fontSize: 16,
    top: 45
  }
}

@Radium
class NavBar extends React.Component {
  render() {
    return (
      <section>
        <div style={styles.headingContainer}>
          <h2>Navbar</h2>
        </div>

        <SigningUpNavBar />
        <LoggingInNavBar />
        <LoggedInNavBar />

      </section>
    );
  }
}

export default NavBar;
