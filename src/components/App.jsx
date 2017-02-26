import React from 'react';
import StyleGuide from './StyleGuide';
import JobForm from './JobForm';
import { StyleRoot } from 'radium';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <StyleRoot>
          <Header />
          <Main />
          <Footer />
        </StyleRoot>
      </div>
    );
  }
}

export default App;
