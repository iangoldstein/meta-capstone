// Login.js
import React from 'react';

const Login = () => {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;