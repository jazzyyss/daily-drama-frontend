import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MemberPage from './pages/loginandsignup/loginandsignup.component';
import HomePage from './components/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import ContactPage from './pages/contact/contact.component';
import Header from './components/header/header.component';
import './app.scss';
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/member' component={MemberPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
