import React from 'react';
import Radium from 'radium';

const styles = {
  tag: {
    display: 'inline',
    background: '#202121',
    paddingBottom: 2,
    margin: 3,
  },

  tagLabel: {
    display: 'inline-block',
    padding: '8px 8px 8px 8px',
    fontSize: 10,
    color: '#f4f7f6',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  tagDelete: {
    background: 'transparent',
    paddingRight: 8,
    borderStyle: 'none',
    borderLeft: '1px solid grey',
    cursor: 'pointer',
  },

}

@Radium
class Tag extends React.Component {

  render() {
    return (
      <div style={styles.tag}>
        <div style={styles.tagLabel}>{this.props.children}</div>
        <button style={styles.tagDelete}>
          <svg width="8px" height="8px" viewBox="0 0 612 612">
            <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
          </svg>
        </button>
      </div>
    )
  }
}

export default Tag;
