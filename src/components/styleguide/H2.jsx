import React from 'react';
import { Grid, Cell } from 'radium-grid';

const H2 = () => {
  const { styles } = H2;
  return (
    <div>
      <h2 style={styles.h2}>Technology</h2>
      <h2 style={styles.h2}>Industry</h2>
    </div>
  );
}

H2.styles = {
  h2: {
    fontSize: 28,
    letterSpacing: 1,
    marginBottom: 25,
    marginLeft: 14
  }
}

export default H2;
