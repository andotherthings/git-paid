import React from 'react';
import { Link } from 'react-router-dom';
import StyleGuide from './styleguide/StyleGuide';

const Footer = () => {
  const { styles } = Footer;

  return (
    <footer style={styles.footer}>
      <Link to="/styles">Style Guide</Link>
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
