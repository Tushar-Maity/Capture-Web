import React from 'react';
import Nav from './components/Nav';
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Importing pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
//Router
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
