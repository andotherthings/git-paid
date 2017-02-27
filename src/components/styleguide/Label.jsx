import React from 'react';
import { Grid, Cell } from 'radium-grid';

const Label = () => {
  const { styles } = Label;
  return (
    <div>
      <label style={styles.inputLabel}>technology</label>
      <label style={styles.inputLabel}>industry</label>
    </div>
  );
}

Label.styles = {
  inputLabel: {
    fontSize: 14,
    fontFamily: 'Poppins',
    letterSpacing: 1,
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: 40
  }
}

export default Label;
