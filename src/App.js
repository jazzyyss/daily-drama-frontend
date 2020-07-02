import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/header.component';
import MemberPage from './pages/loginandsignup/loginandsignup.component';
import HomePage from './pages/homepage/homepage.component';
import AboutPage from './pages/about/about.component';
import ContactPage from './pages/contact/contact.component';
import BlogPage from './pages/blog/blog.component';
import NotFound from './components/not-found/not-found.component';
import ProtectedRoute from './components/protected-route/protected-route';
import './app.scss';

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path='/member' component={MemberPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/contact' component={ContactPage} />
        <ProtectedRoute exact path='/blog/:blogId' component={BlogPage} />
        <Route exact path='/not-found' component={NotFound} />
        <ProtectedRoute exact path='/' component={HomePage} />
        <Redirect to='/not-found' />
      </Switch>
    </>
  );
}

export default App;
