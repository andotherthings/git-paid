import React from 'react';
import Radium from 'radium';
import Tag from './Tag';

const styles = {
  headingContainer: {
    padding: '40px 0 40px 0',
    background: 'white',
    fontSize: 20,
    letterSpacing: 1,
    color: '#454545',
    fontWeight: 300,
    textAlign: 'center'
  },
}


@Radium
class Tags extends React.Component {
  render() {
    return (
      <section>
        <div style={styles.headingContainer}>
          <h2>Tags</h2>
        </div>

        <div style={{textAlign: 'center', margin: '75px 0 75px 0'}}>
          <Tag>Hello World</Tag>
          <Tag>React</Tag>
          <Tag>Space</Tag>
          <Tag>Javascripts!</Tag>
        </div>
      </section>
    );
  }
}

export default Tags;
