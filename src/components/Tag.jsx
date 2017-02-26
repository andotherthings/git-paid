import React from 'react';

const Tag = (props) => {
  const { styles } = Tag;
  return (
    <div style={styles.container}>
      <div style={styles.label}>{props.children}</div>
      <button style={styles.tagDelete}>
        <svg width="8px" height="8px" viewBox="0 0 612 612">
          <polygon points="612,36.004 576.521,0.603 306,270.608 35.478,0.603 0,36.004 270.522,306.011 0,575.997 35.478,611.397 306,341.411 576.521,611.397 612,575.997 341.459,306.011" fill="#FFFFFF"/>
        </svg>
      </button>
    </div>
  )
}

Tag.styles = {
  container: {
    display: 'inline',
    background: '#202121',
    fontSize: 11,
    padding: '8px 3px 8px 8px',
    margin: 3,
  },

  label: {
    display: 'inline-block',
    paddingRight: 6,
    color: '#f4f7f6',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  tagDelete: {
    background: 'transparent',
    borderStyle: 'none',
    borderLeft: '1px solid grey',
    cursor: 'pointer',
  },
}

export default Tag;
