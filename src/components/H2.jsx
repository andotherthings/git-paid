import React from 'react';
import { Grid, Cell } from 'radium-grid';

const H2 = (props) => {
  const { styles } = H2;
  return (
    <h2 style={styles.h2}>
      {props.children}
    </h2>
  );
}

H2.styles = {
  h2: {
    fontSize: 28,
    letterSpacing: 1,
    marginBottom: 25,
    marginLeft: 14,
  }
}

export default H2;
