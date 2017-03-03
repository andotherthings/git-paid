import React from 'react';
import { Grid, Cell } from 'radium-grid';

const H4 = (props) => {
  const { styles } = H4;
  return (
    <h4 style={styles.h4}>
      {props.children}
    </h4>
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
