import React from 'react';
import ColorPalette from './ColorPalette';
import NavBar from './NavBar';
import Typography from './Typography';
import Buttons from './Buttons';
import Tags from './Tags';
import InputFields from './InputFields';


import Radium from 'radium';

const styles = {
  styleGuide: {
    fontFamily: 'Poppins',
    background: '#f5f5f5'
  },

  guideHeader: {
    height: 200,
    background: '#37d087',
    color: 'white',
    fontSize: 60,
    textTransform: 'uppercase',
    textAlign: 'center'
  },

  guideHeading: {
    paddingTop: 75
  }
}

@Radium
class StyleGuide extends React.Component {
  render() {
    return (
      <div style={styles.styleGuide}>
        <div style={styles.guideHeader}>
          <h1 style={styles.guideHeading}>Git Paid UI Style Guide</h1>
        </div>

        <ColorPalette />
        <NavBar />
        <Typography />
        <Buttons />
        <Tags />
        <InputFields />

      </div>
    );
  }
}

export default StyleGuide;
