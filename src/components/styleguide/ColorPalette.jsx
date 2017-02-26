import React from 'react';
import Radium from 'radium';

const ColorPaletteComp = () => {
  const { styles } = ColorPaletteComp;
  return (
    <section style={styles.colorsContainer}>
      <div style={styles.headingContainer}>
        <h2>Color Palette</h2>
      </div>
      <div style={styles.colorPalette}>
        <div style={styles.mainColors}>
          <div style={[styles.mainColor, styles.black]}>
            <p style={[styles.hexValue, styles.hexBlack]}>1f1f1f</p>
          </div>
          <div style={[styles.mainColor, styles.white]}>
            <p style={[styles.hexValue, styles.hexWhite]}>f8f8f8</p>
          </div>
        </div>
        <div style={styles.accentColors}>
          <div style={[styles.accentColor, styles.red]}>
            <p style={[styles.hexValue, styles.accentHex]}>d03a37</p>
          </div>
          <div style={[styles.accentColor, styles.green]}>
            <p style={[styles.hexValue, styles.accentHex]}>37d087</p>
          </div>
          <div style={[styles.accentColor, styles.blue]}>
            <p style={[styles.hexValue, styles.accentHex]}>006699</p>
          </div>
        </div>
      </div>
    </section>
  );
}

ColorPaletteComp.styles = {
  headingContainer: {
    padding: '40px 0',
    background: 'white',
    fontSize: 20,
    letterSpacing: .9,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center'
  },

  colorsContainer: {
    height: 575,
    background: '#f5f5f5',
  },

  mainColors: {
    width: 500,
    display: 'flex',
    margin: '75px auto 0 auto',
    height: 200
  },

  accentColors: {
    margin: '0 auto',
    width: 500,
    display: 'flex'
  },

  black: {
    background: '#1f1f1f',
    width: '50%'
  },

  white: {
    background: '#f8f8f8',
    width: '50%'
  },

  red: {
    background: '#d03a37',
    width: '33%',
    height: 100
  },

  green: {
    background: '#37d087',
    width: '33%',
    height: 100
  },

  blue: {
    background: '#006699',
    width: '33%',
    height: 100
  },

  hexValue: {
    textAlign: 'center',
    paddingTop: 90,
    fontSize: 14,
    fontFamily: 'Lato'
  },

  hexBlack: {
    color: 'white'
  },

  hexWhite: {
    color: '#191919'
  },

  accentHex: {
    paddingTop: 40,
    color: 'white'
  }
}

const ColorPalette = Radium(ColorPaletteComp);
export default ColorPalette;
