import React from 'react';
import Radium from 'radium';

const NavBar = () => {
  const { styles } = NavBar;
  return (
    <section>
      <div style={styles.headingContainer}>
        <h2>Navbar</h2>
      </div>

      <div>
        <nav style={styles.nav}>
        </nav>
      </div>

    </section>
  );
}

NavBar.styles = {
  headingContainer: {
    padding: '40px 0',
    background: 'white',
    fontSize: 20,
    letterSpacing: .9,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center'
  },

  nav: {
    marginTop: 75,
    height: 100,
    background: '#1f1f1f',
    marginBottom: 75
  }
}

export default NavBar;
