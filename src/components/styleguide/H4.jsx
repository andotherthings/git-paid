import React from 'react';
import { Grid, Cell } from 'radium-grid';

const H4 = () => {
  const { styles } = H4;
  return (
    <div>
      <h4 style={styles.h4}>Technology</h4>
      <h4 style={styles.h4}>Industry</h4>
    </div>
  );
}

H4.styles = {
  h4: {
    fontSize: 18,
    marginBottom: 35,
    marginLeft: 14
  }
}

export default H4;
