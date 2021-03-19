import React from "react";
import { Link } from "react-router-dom";
import './pages.css';

function Signup() {
    return( 
        <div className="wrapper">
            <div className="detailsS">
                <h1>Welcome!</h1>
                <h2>Please enter your details below</h2>
                <input type="email" placeholder="example@mail.com"/>
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Retype Password" />
                <Link className="enter" to="/Todo"> Register </Link>
                <div>
                    <Link className="dont" to="/Login"> Already have an account? Login</Link>
                </div>
            </div>
        </div>
    )
}
export default Signup;