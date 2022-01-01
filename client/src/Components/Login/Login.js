import React, { useState } from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import GooglePlay from "./images/google-play.png";
import AppStore from "./images/app-store.png";
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    const [logInUser, setLogInUser] = useState({
        email : "",
        password : ""
    });

    const handleLogIn = (e) => {
        const { name, value } = e.target;

        setLogInUser({
            ...logInUser,
            [name] : value
        });
    };

    const login = (e) => {
        e.preventDefault();

        const { email, password } = logInUser;

        if(email && password){
            axios.post("http://127.0.0.1:5000/login", logInUser)
            .then((res) => {
                window.alert(res.data.message);
                if(res.data.message === "Login Successfully"){
                    navigate("/");
                }
                else if(res.data.message === "User not registered"){
                    navigate("/signup");
                }
                else {
                    navigate("/login");
                }
            })
        }
        else {
            window.alert("Invalid input");
        }
    }

    return (
        <>
            <section id='log-in'>

                <div className="li-box">

                    <h1 className="li-h">My<span>Meals</span></h1>

                    <form method='post' id='li-form'>

                        <input type="email" name='email' id='email' onChange={handleLogIn} value={logInUser.email} placeholder='Enter your email' /> <br />
                        <input type="password" name="password" id="password" onChange={handleLogIn} value={logInUser.password} autoComplete='off' placeholder='Enter your password' /> <br />

                        <p className="li-fp"><Link  to="/">Forgot Password ?</Link></p>

                        <button className='li-f-btn' onClick={login}>Log in</button>

                        <div className="li-line">
                            <div className="li-line1"></div>
                            <div className="li-or">OR</div>
                            <div className="li-line2"></div>
                        </div>
    
                        <div className="li-option">
                            <h1 className="li-h2"> Log in using </h1>
                            <Link to="#"><i className="fab fa-facebook i-1"></i></Link> 
                            <Link to="#"><i className="fab fa-instagram i-2"></i></Link>
                            <Link to="#"><i className="fab fa-twitter i-3"></i></Link>
                        </div>

                        <div className="li-su">
                            <p className="li-su-p"> Don't have an account ? <Link className="li-su-a" to="/signup"> Sign up </Link></p>
                        </div>

                    </form>
                </div>

                <div className="gta">
                    <p className="gta-p"> Get the app from. </p>
                    <img className="gpl" src={GooglePlay} alt="google play" />
                    <img className="asl" src={AppStore} alt="app store" />
                </div>

            </section>
        </>
    )
};

export default Login;