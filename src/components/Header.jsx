import React from 'react';
import StyledLink from './StyledLink';


const Header = () => {
  const { styles } = Header;

  return (
    <header style={styles.header}>
      <nav>
        <StyledLink to="/">
          Git Paid
        </StyledLink>
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
