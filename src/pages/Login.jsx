import React from "react";
import { Link } from "react-router-dom";
import './pages.css';

function Login() {
    return( 
        <div className="wrapper">
            <div className="detailsL">
                <h1>Welcome!</h1>
                <h3>This is an application made by Alan Hevehan</h3>
                <h2>Please enter your details below</h2>
                <input type="email" placeholder="example@mail.com"/>
                <input type="password" placeholder="Password"/>
                <Link className="enter" to="/Todo"> Login </Link>
                <div>
                    <Link className="dont" to="/Signup"> Don't have an account? Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
export default Login;