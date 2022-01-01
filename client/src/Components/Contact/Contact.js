import React from 'react';
import "./Contact.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    const [contactUser, setContactUser] = useState({
        name : "",
        email : "",
        phone : "",
        message : ""
    });

    const handleContact = (e) => {
        const { name, value } = e.target;

        setContactUser({
            ...contactUser,
            [name] : value
        })
    };

    const submitContact = (e) => {
        e.preventDefault();

        const { name, email, phone, message } = contactUser;

        if(name && email && phone && message){
            axios.post("http://127.0.0.1:5000/contact", contactUser)
            .then((res) => {
                window.alert(res.data.message);
            });
        }
        else {
            window.alert("Invalid input");
        };
    };

    return (
        <>
            <section id="contact-us">

                <div>
                    <h1 className="cu-h"> <span className="cu-contact"> Contact </span> <span className="cu-us"> Us </span> </h1>
                </div>

                <div className="cu-box">

                    <div className="cu-add">
                        <p> Some space for Adds </p>
                    </div>

                    <div className="cu-form">
                        <form action="/action_page.php" acceptCharset="UTF-8" method="post" name="cu-form" id="cu-form">
                            <div className="name">
                                <label htmlFor="name"> Name :- </label> <br />
                                <input type="text" id="name" name="name" onChange={handleContact} value={contactUser.name} placeholder="Enter Your Name" /> <br /> <br />
                            </div>
                            <div className="email">
                                <label htmlFor="email"> Email :- </label> <br />
                                <input type="email" id="email" name="email" onChange={handleContact} value={contactUser.email} placeholder="Enter Your Email id" /> <br /> <br />
                            </div>
                            <div className="Phone">
                                <label htmlFor="phone"> Phone Number :- </label> <br />
                                <input type="tel" id="phone" name="phone" onChange={handleContact} value={contactUser.phone} placeholder="Enter Your Phone Number" /> <br /> <br />
                            </div>
                            <div className="message">
                                <label htmlFor="message"> Message :- </label> <br />
                                <textarea id="message" name="message" onChange={handleContact} value={contactUser.message} cols="50" rows="10" placeholder="Describe your message here... "></textarea> <br /> <br />
                            </div>

                            <div className="submit">
                            <button onClick={submitContact}> Submit </button>
                            </div>
                        </form>
                    </div>

                    <div className="cu-add">
                        <p> Some space for Adds </p>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Contact;
