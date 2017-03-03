import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { styles } = Header;

  return (
    <header style={styles.header}>
      <nav>
        <Link to="/"
        style={Object.assign(
          {},
          styles.link,
        )}>
          Git Paid
        </Link>
      </nav>
    </header>
  )
}

Header.styles = {
  header: {
    backgroundColor: '#F5F5F5',
    padding: 8,
  },
  link: {
    color: 'black',
    display: 'block',
    margin: 0.5,
    fontSize: 14,
    fontFamily: 'Poppins',
    letterSpacing: 1,
    textTransform: 'uppercase',
    textDecoration: 'none',
  }

}

export default Header;
