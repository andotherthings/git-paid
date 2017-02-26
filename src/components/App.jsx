import React from 'react';
import { StyleRoot } from 'radium';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <StyleRoot>
          <Header />
          <Main />
          <Footer />
        </StyleRoot>
      </BrowserRouter>
    );
  }
}

export default App;
