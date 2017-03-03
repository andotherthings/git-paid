import React from 'react';
import StyledLink from './StyledLink';
import StyleGuide from './styleguide/StyleGuide';

const Footer = () => {
  const { styles } = Footer;

  return (
    <footer style={styles.footer}>
      <StyledLink to="/styles">Style Guide</StyledLink>
    </footer>
  )
}

Footer.styles = {
  footer: {
    backgroundColor: '#F5F5F5',
    padding: 8,
  }
}

export default Footer;
