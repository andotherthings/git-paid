import React from 'react';
import Radium from 'radium';

const TypographyComp = () => {
  const { styles } = TypographyComp;
  return (
    <section>
      <div style={styles.headingContainer}>
        <h2>Typography</h2>
      </div>

      <div style={{display: 'flex', margin: '75px 0px'}}>
        <div style={{width: '20%', marginLeft: '100px'}}>
          <h2 style={[styles.addMargin, styles.mainHeading]}>Main Heading</h2>
          <h3 style={[styles.addMargin, styles.subHeading]}>Sub Heading</h3>
          <h4 style={[styles.addMargin, styles.dashboardHeading]}>Dashboard Column Heading</h4>
          <label style={[styles.inputLabel]}>input label</label>
        </div>

        <div style={{marginLeft: '5%'}}>
          <h2 style={[styles.addMargin, styles.mainHeading]}>Job Posting, Interactions, Address</h2>
          <h3 style={[styles.addMargin, styles.subHeading]}>Technology, Industry</h3>
          <h4 style={[styles.addMargin, styles.dashboardHeading]}>Company Name, Title, Industry</h4>
          <label style={styles.inputLabel}>company url, description</label>
        </div>
      </div>
    </section>
  );
}

TypographyComp.styles = {
  headingContainer: {
    padding: '40px 0',
    background: 'white',
    fontSize: 20,
    letterSpacing: .9,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center'
  },

  addMargin: {
    marginBottom: 25
  },

  mainHeading: {
    fontSize: 28,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginTop: 25
  },

  subHeading: {
    fontSize: 18.667,
    fontWeight: 'bold'
  },

  subHeading: {
    fontSize: 16,
    fontWeight: 'bold'
  },

  inputLabel: {
    fontSize: 14,
    fontFamily: 'Poppins',
    letterSpacing: 1,
    textTransform: 'uppercase'
  }

}

const Typography = Radium(TypographyComp);
export default Typography;
