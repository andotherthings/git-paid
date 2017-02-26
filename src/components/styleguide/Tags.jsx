import React from 'react';
import Tag from './../Tag';

const Tags = () => {
  const { styles } = Tags;
  return (
    <section>
      <div style={styles.headingContainer}>
        <h2>Tags</h2>
      </div>

      <div style={{textAlign: 'center', margin: '75px 0 75px 0'}}>
        <Tag>hELLo WoRlD</Tag>
        <Tag>React</Tag>
        <Tag>Space</Tag>
        <Tag>Javascripts!</Tag>
        <Tag>bob</Tag>
      </div>
    </section>
  );
}

Tags.styles = {
  headingContainer: {
    padding: '40px 0',
    background: 'white',
    fontSize: 20,
    letterSpacing: 1,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center'
  },
}


export default Tags;
