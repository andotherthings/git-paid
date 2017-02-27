import React from 'react';
import { Grid, Cell } from 'radium-grid';

const H3 = () => {
  const { styles } = H3;
  return (
    <div>
      <h3 style={styles.h3}>Technology</h3>
      <h3 style={styles.h3}>Industry</h3>
    </div>
  );
}

H3.styles = {
  h3: {
    fontSize: 18.667,
    fontWeight: 'bold',
    marginBottom: 35,
    marginLeft: 14
  }
}

export default H3;
