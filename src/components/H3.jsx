import React from 'react';
import { Grid, Cell } from 'radium-grid';

const H3 = (props) => {
  const { styles } = H3;
  return (
    <h3 style={styles.h3}>
      {props.children}
    </h3>
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
