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

  btn: {
    width: 110,
    height: 40,
    background: 'transparent',
    border: '1px solid grey',
    marginLeft: 20,
    fontSize: 10,
    fontWeight: 500,
    letterSpacing: 3,
    color: 'grey',
    textTransform: 'uppercase',
    letterSpacing: 1,
    transition: '.3s ease-in-out',
    cursor: 'pointer'
  },

  btnInfo: {
    border: '1px solid #006699',
    color: '#006699',
  },

  btnWarning: {
    border: '1px solid #d03a37',
    color: '#d03a37',
  },

  btnSuccess: {
    border: '1px solid #37d087',
    color: '#37d087',
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

        <div style={{display: 'flex', height: '300px'}}>
          <div style={{width: '50%', padding: '100px 0', textAlign: 'center'}}>
            <div style={{marginBottom: '20px', textAlign: 'center'}}>
              <button style={styles.btn}>Default</button>
              <button style={[styles.btn, styles.btnWarning]}>Warning</button>
            </div>
            <div style={{textAlign: 'center'}}>
              <button style={[styles.btn, styles.btnInfo]}>Info</button>
              <button style={[styles.btn, styles.btnSuccess]}>Success</button>
            </div>

          </div>

          <div style={{width: '50%', padding: '100px 0', textAlign: 'center', background: '#202121'}}>
            <div style={{marginBottom: '20px', textAlign: 'center'}}>
              <button style={styles.btn}>Default</button>
              <button style={[styles.btn, styles.btnWarning]}>Warning</button>
            </div>
            <div style={{textAlign: 'center'}}>
              <button style={[styles.btn, styles.btnInfo]}>Info</button>
              <button style={[styles.btn, styles.btnSuccess]}>Success</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Buttons;
