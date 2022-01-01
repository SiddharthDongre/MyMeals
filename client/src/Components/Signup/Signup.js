import React, { useState } from 'react';
import "./Signup.css";
import GooglePlay from "./images/google-play.png";
import AppStore from "./images/app-store.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const navigate = useNavigate();

    const [signUpUser, setSignUpUser] = useState({
        name : "",
        email : "",
        password : "",
        reEnterPassword : ""
    });

    const handleSignUp = (e) => {
        const { name, value } = e.target;

        setSignUpUser({
            ...signUpUser,
            [name] : value
        })
    }

    const signUp = (e) => {
        e.preventDefault();
        
        const { name, email, password, reEnterPassword } = signUpUser;

        if(name && email && password && password === reEnterPassword){
            axios.post("http://127.0.0.1:5000/signup", signUpUser)
            .then((res) => {
                window.alert(res.data.message);
                if(res.data.message === "Successfully Registered"){
                    navigate("/login");
                }
            })
        }
        else if(password !== reEnterPassword){
            window.alert("Password did not matched");
        }
        else {
            window.alert("Invalid input");
        }
    }

    return (
        <>
            <section id='sign-up'>

                <div className='su-box'>

                    <h1 className='su-h'>My<span>Meals</span></h1>

                    <form method='post' id='su-form'>

                        <input type="text" name='name' id='name' onChange={handleSignUp} value={signUpUser.name} placeholder='Enter your name' /> <br />
                        <input type="email" name='email' id='email' onChange={handleSignUp} value={signUpUser.email} placeholder='Enter your email' /> <br />
                        <input type="password" name="password" id="password" onChange={handleSignUp} value={signUpUser.password} autoComplete='off' placeholder='Enter your password' /> <br />
                        <input type="password" name="reEnterPassword" id="reEnterPassword" onChange={handleSignUp} value={signUpUser.reEnterPassword} autoComplete='off' placeholder='Re enter your password' /> <br />

                        <p className='su-f-li'>Already have an account ? <Link to='/login'>Log in</Link></p>

                        <button className='su-f-button' onClick={signUp}>Sign up</button>

                        <div className="su-line">
                            <div className="su-line1"></div>
                            <div className="su-or">OR</div>
                            <div className="su-line2"></div>
                        </div>

                        <div className="su-option">
                            <h1 className="suo-h"> Sign up using </h1>
                            <Link to="#"><i className="fab fa-facebook i-1"></i></Link>
                            <Link to="#"><i className="fab fa-instagram i-2"></i></Link>
                            <Link to="#"><i className="fab fa-twitter i-3"></i></Link>
                        </div>

                        <p className="tac-p"> By singing up, you are agree to our <b>Terms</b> and <b>Conditions</b>. </p>

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
}

export default Signup;

