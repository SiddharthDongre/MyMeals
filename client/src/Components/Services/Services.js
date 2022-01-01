import React from 'react';
import "./Services.css";
import breakfast from "./images/breakfast.png";
import lunch from "./images/lunch.png";
import dinner from "./images/dinner.png";

const Services = () => {
    return (
        <>
            <section id="our-services">

                <div>
                    <h1 className="ourservices-h">Our <span className="services-h">Services</span> </h1>
                </div>

                <div className="box">
                    <div className="breakfast">
                        <h1> Breakfast </h1>
                        <img src={breakfast} alt="breakfast" />
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci beatae repudiandae illum recusandae consequatur facilis, ea alias pariatur et mollitia? </p>
                        <button className="b-button1"> Order Now </button>
                    </div>

                    <div className="lunch">
                        <h1> Lunch </h1>
                        <img src={lunch} alt="lunch" />
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci beatae repudiandae illum recusandae consequatur facilis, ea alias pariatur et mollitia? </p>
                        <button className="l-button"> Order Now </button>
                    </div>

                    <div className="dinner">
                        <h1> Dinner </h1>
                        <img src={dinner} alt="dinner" />
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci beatae repudiandae illum recusandae consequatur facilis, ea alias pariatur et mollitia? </p>
                        <button className="d-button1"> Order Now </button>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Services;
