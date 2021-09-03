import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import { Button } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import App from './App';

function LoginApp() {
    const adminUser = {
        id: "12345",
        password: "admin12345"
    }
     
    // const basicUser={
    //     id: "12345",
    //     password: "basic12345"
    // }

    const [user, setUser] = useState({ name: "", id: "" });
    const [error, SetError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.id === adminUser.id && details.password === adminUser.password) {
            console.log('Logged in!');
            setUser({
                name: details.name,
                id: details.id
            });
            this.props.history.push('/');
        }
        else {
            console.log('Details do not match!');
            SetError('Details do not match!');
        }
    }

    const Logout = () => {
        console.log("Logout");
        setUser({ name: "", id: "" });
    }

    return (
        <div className="App">
            {(user.id !== "") ? (
                <div className="welcome">
                    <App />
                    <Button className="bottom" onClick={Logout}>Logout</Button>
                </div>
            ) : (
                <LoginForm Login={Login} error={error} />
            )}
        </div>
    );
}

export default withRouter(LoginApp);