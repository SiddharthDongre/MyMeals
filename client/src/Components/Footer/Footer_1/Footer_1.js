import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer_1.css";

const Footer_1 = () => {
    return (
        <>
            <section id="details">

                <div>
                    <h1 className="d-h"> My<span className="d-meals">Meals</span> </h1>
                </div>

                <div className="d-box">

                    <div className="d-box1">
                        <p> Here some space for Adds </p>
                    </div>

                    <div className="d-box2">
                        <h1> Get to know us </h1>

                        <Link to='/about'> <i className="fa fa-user">       </i> About Us </Link> <br />
                        <Link to='/services'> <i className="fa fa-briefcase">  </i> Our Services </Link> <br />
                        <Link to='/contact'> <i className="fa fa-envelope">   </i> Contact Us </Link> <br />
                        <Link to='/clients'> <i className="fas fa-handshake"> </i> Our Clients </Link> <br />
                    </div>

                    <div className="d-box3">
                        <h1> Make Money with us </h1>

                        <Link to='/'> <i className="fas fa-dollar-sign"> </i> Sell on MyMeals </Link> <br />
                        <Link to='/'> <i className="fas fa-ad"> </i> Advertise your products </Link> <br />
                        <Link to='/'> <i className="fas fa-rupee-sign"> </i> Get jobs on MyMeals </Link> <br />
                    </div>

                    <div className="d-box4">
                        <h1> Connect with us </h1>
                        {/* <h3> Social Links </h3> */}
                        <Link to="/"> <i className="fab fa-instagram i-1">  </i>  Instagram </Link> <br />
                        <Link to="/"> <i className="fab fa-facebook-f i-2"> </i>  Facebook  </Link> <br />
                        <Link to="/"> <i className="fab fa-twitter i-3">    </i>   Twitter  </Link> <br />
                        <Link to="/"> <i className="fab fa-whatsapp i-4">   </i> What's App </Link><br />
                        <a href="tel:+917415747504"> <i className="fas fa-phone-alt i-5"> </i> +917415747504 </a> <br />
                        <a href="mailto:siddharthdongre06@gmail.com"><i className="far fa-envelope i-6"></i> siddharthdongre06@gmail.com </a> <br /> <br />
                        
                    </div>

                    <div className="d-box5">
                        <p> Some space here for Adds </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Footer_1;
