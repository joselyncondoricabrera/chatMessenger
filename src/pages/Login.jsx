import React from "react";
import '../styles/Login.scss';
import logo from '../image/iconMessenger.png';

const Login = () =>{
    return(
        <div className="Login">
            <div className="Login-container">
                
                <picture className="login-container-logo">
                    <img src={logo} alt="logo" className="login-logo" />
                </picture>
                <p className="login-text">Si no tienes cuenta, puedes crear uno !</p>
                <button className="login-button-createAccount">Create account</button>
                
                <form className="form">
                    <label className="label">Email address</label>
                    <input placeholder="name@example.com" className="input input-email"/>
                    <label className="label">Password</label>
                    <input  placeholder="*********" className="input input-password"/>
                    <button className="login-button">Log in</button>
                </form>

            </div>

        </div>
    );
}

export default Login;