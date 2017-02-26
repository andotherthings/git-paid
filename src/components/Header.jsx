import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { styles } = Header;

  return (
    <header style={styles.header}>
      <nav>
        <Link to="/">
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
  }
}

export default Header;
