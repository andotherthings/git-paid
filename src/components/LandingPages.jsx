import React from 'react';
import Radium from 'radium';
import Login from './Login';
import Register from './Register';

const styles = {
  headingContainer: {
    padding: '40px 0 40px 50px',
    background: 'white',
    fontSize: 20,
    letterSpacing: .9,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center'
  }
}

@Radium
class LandingPages extends React.Component {
  render() {
    return (
      <section>
        <div style={styles.headingContainer}>
          <h2>Landing Pages</h2>
        </div>

        <Login />
        <Register />
      </section>
    );
  }
}

export default LandingPages;
