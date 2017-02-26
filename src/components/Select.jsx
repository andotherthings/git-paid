import React from 'react';

const Select = (props) => {
  const { styles } = Select;
  return (
    <div style={styles.container}>
      <label style={styles.label}>
        {props.label}:
      </label>
      <select style={styles.select}>
        <option>hi</option>
      </select>
    </div>
  )
}

Select.styles = {
  container: {
    width: '100%',
    padding: 10,
  },

  label: {
    display: 'block',
    paddingBottom: 5,
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: 100,
    letterSpacing: .4,
    color: 'white',
    textTransform: 'uppercase',
  },

  select: {
    height: 34,
    width: '100%',
    background: 'transparent',
    paddingLeft: 10,
    border: '1px solid grey',
    WebkitAppearance: 'none',
    WebkitBorderRadius: 0,
    background: "url(\"data:image/svg+xml;utf8,<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'><path fill='#444' d='M7.406 7.828l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z'></path></svg>\")",
    backgroundPosition: '100% 50%',
    backgroundRepeat: 'no-repeat',
    fontSize: 16,
    fontWeight: 100,
    letterSpacing: .4,
    color: 'white',
  },
}

export default Select;
