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
    height: 33,
    color: '#f4f7f6',
    textTransform: 'uppercase',
    letterSpacing: 1,
    padding: '0 50px 0 20px',
    marginRight: 20
  },

  tagsHovered: {
    position: 'relative',
    background: '#000',
    border: 'none',
    fontSize: 10,
    height: 33,
    color: '#f4f7f6',
    textTransform: 'uppercase',
    letterSpacing: 1,
    padding: '0 50px 0 20px',
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
  }
}


@Radium
class Tags extends React.Component {
  render() {
    return (
      <section>
        <div style={styles.headingContainer}>
          <h2>Tags</h2>
        </div>

        <div style={{textAlign: 'center', marginTop: '75px', marginBottom: '75px'}}>
          {/* STATIC TAGS  */}
          <div>
            <button style={styles.tags}>
              medical
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>

            <button style={styles.tags}>
              entertainment
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>

            <button style={styles.tags}>
              finance
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>

            <button style={styles.tags}>
              construction
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>

            <button style={styles.tags}>
              real estate
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>

            <button style={styles.tags}>
              clothing
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>
          </div>

          {/* HOVER TAGS  */}
          <div style={{marginTop: '50px'}}>
            <button style={styles.tagsHovered}>
              medical
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>

            <button style={styles.tagsHovered}>
              entertainment
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>

            <button style={styles.tagsHovered}>
              finance
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>

            <button style={styles.tagsHovered}>
              construction
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>

            <button style={styles.tagsHovered}>
              real estate
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>

            <button style={styles.tagsHovered}>
              clothing
              <svg style={styles.x} width="8px" height="8px" viewBox="0 0 612 612">
                <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
              </svg>
              <span style={styles.deleteDivider}></span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Tags;
