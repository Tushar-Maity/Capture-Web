import React from 'react';
import Nav from './components/Nav';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Importing pages
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
