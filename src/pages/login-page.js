import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login/login-component.css';
import LoginComponent from '../login/login-component.js';

export default class LoginPage extends React.Component {
    render() {
      return (
        <div>
          <LoginComponent />
        </div>
    );
  }
}

