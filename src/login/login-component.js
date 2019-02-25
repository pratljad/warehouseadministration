import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './login-component.css';

export default class LoginComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password: "",
            alerts: [
                {
                    id:1, 
                    type:'danger', 
                    message: 'Login failed.'
                }
            ]
        };
        this.onLoggedIn = this.onLoggedIn.bind(this);
    }

    handleChange = event => {
        this.setState({
          email: event.target.value
        });
        console.log(this.state.email);
    }

    onLoggedIn() {
        var error = null;

        if(this.email === "" || this.password === "") {
            this.setError(
                (this.email === "" ? "E-Mail " : "") 
                + (this.email === "" && this.password === "" ? "und " : "")
                + (this.password === "" ? "Passwort" : "") + " ist leer!"
            );
        } else {
            this.getLoginData().map(res => res.json()).subscribe(
                (data) => {
                    console.log(data.uid);
                    //AppComponent.uid = data.uid; 
                    //HeaderComponent.setUsername(data.uname);
                    //HeaderComponent.setEmail(this.email);
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(["warehouse"]);
                },
                (err) => this.setError(err + " ErrorCode: " + err.status));
        }
    }

    closeAlert(alert) {
        const index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }


    setError(msg) {
        this.alerts[0].message = msg;
        document.getElementById("AppAlert").hidden = false;
    }
    
    getLoginData() {
        return this.http.post(
            /*AppComponent.getLink("login", ""), 
            { 
                "email" : this.email, 
                "password" : this.password 
            }*/
        );
    }

    validateForm() {
        return (
            this.state.email !== null || this.state.password !== null ||
            this.state.email.length !== 0 || this.state.password.length !== 0  
        );
    }

    render() {
        return (
        <div className="login-container">
            <img className="login-user-avatar" src={require('../assets/images/logo.png')} alt="Login Logo"/>
            <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
                <FormControl
                    autoFocus
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email"
                />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">          
                <FormControl
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    placeholder="Password"
                />
            </FormGroup>
            <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                onClick={this.handleLogin}
            >
                Login
            </Button>
            </form>
        </div>
        );
    }
}