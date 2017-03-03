import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { styles } = Footer;

  return (

    <footer style={ styles.footer }>
      <Link
        to="/styles"
        style={ Object.assign(
        {},
        styles.link,
      ) }
      >
      Style Guide</Link>
    </footer>
  );
};

Footer.styles = {
  footer: {
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
  },
};

export default Footer;
