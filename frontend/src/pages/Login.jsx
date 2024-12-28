import React from 'react';
import './css/Login.css';

const Login = () => {
    return (
        <div className="login">
            <div className="container">
                <h1>Sign Up</h1>
                <div className="fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Email Address'/>
                    <input type="text" placeholder='Password'/>
                </div>
                <button>Continue</button>
                <p className="lo">Already have an account? <span>Login here</span></p>
                <div className="agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use & privacy policy </p>
                </div>
            </div>
        </div>
    )
}

export default Login;