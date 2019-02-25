import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginPage from './pages/login-page.js';
/*
 <Route path="/signup" component={}  />
          <Route path="/error" component={}  />
          <Route path="/access-denied" component={}  />
          <Route path="/not-found" component={}  />
          <Route path="/**" component={} /> */
export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/login" component={LoginPage} exact />
          <Route path="/" />
          
        </div>
      </BrowserRouter>
    );
  }
}
