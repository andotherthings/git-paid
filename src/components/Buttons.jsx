import React from 'react';
import Radium from 'radium';

const styles = {
  headingContainer: {
    padding: '40px 0 40px 50px',
    background: 'white',
    fontSize: 20,
    letterSpacing: 1,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center'
  },

  tags: {
    position: 'relative',
    background: '#202121',
    border: 'none',
    fontSize: 10,
    width: 98,
    height: 33,
    color: '#f4f7f6',
    textTransform: 'uppercase',
    letterSpacing: 1,
    padding: '0 50px 0 13px',
    marginRight: 20
  },

  x: {
    position: 'absolute',
    right: 9,
    top: 12
  },

  deleteDivider: {
    position: 'absolute',
    height: '100%',
    width: 1,
    background: 'grey',
    display: 'block',
    top: 0,
    right: 25
  },

  createNew: {
    border: 'none',
    padding: 0,
    height: 50,
    width: 140,
    background: '#006699',
    letterSpacing: 1,
    position: 'relative',
    fontSize: 10,
    textTransform: 'uppercase',
    color: 'white',
  },

  progressBackground: {
    background: '#1f1f1f',
    padding: 100
  },

  btn: {
    background: '#202121',
    fontSize: 10,
    width: 110,
    height: 40,
    letterSpacing: 3,
    border: '1px solid rgba(255, 255, 255, .2)',
    color: 'grey',
    textTransform: 'uppercase',
    letterSpacing: 1,
    padding: 0,
    marginLeft: 20,
  },

  btnWarning: {
    letterSpacing: 3,
    border: '1px solid #d03a37',
    color: 'white',
    transition: '.3s ease-in-out',
    cursor: 'pointer'
  },

  btnSuccess: {
    letterSpacing: 3,
    border: '1px solid #37d087',
    color: '#37d087',
    transition: '.3s ease-in-out',
    cursor: 'pointer'
  }
}


@Radium
class Buttons extends React.Component {
  render() {
    return (
      <section>
        <div style={styles.headingContainer}>
          <h2>Buttons</h2>
        </div>

        <div style={{display: 'flex', height: '350px'}}>
          <div style={{width: '50%', padding: '50px 0', textAlign: 'center', marginTop: '100px'}}>
            <button style={styles.createNew}>
              Create New
            </button>

          </div>

          <div style={{width: '50%', background: '#202121', padding: '50px 0', paddingTop: '100px'}}>
            <div style={{marginBottom: '20px', textAlign: 'center'}}>
              <button style={[styles.btn, styles.btnStatic]}>static</button>
              <button style={[styles.btn, styles.btnWarning]}>hover</button>
            </div>
            <div style={{textAlign: 'center'}}>
              <button style={[styles.btn, styles.btnStatic]}>static</button>
              <button style={[styles.btn, styles.btnSuccess]}>hover</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Buttons;
