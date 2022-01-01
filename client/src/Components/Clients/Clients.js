import React from 'react';
import "./Clients.css";
import zomato from "./images/zomato.png";
import google from "./images/google.png";
import iphone from "./images/iphone.png";
import pubg from "./images/pubg.png";
import swiggy from "./images/swiggy.png";

const Client = () => {
    return (
        <>
            <section id="our-clients">

                <div>
                    <h1 className="oc-heading"> <span className="our-h"> Our </span> <span className="client-h"> Client </span> </h1>
                </div>

                <div className="oc-box">

                    <div className="oc-first">
                        <img src={zomato} alt="zomato" />
                    </div>

                    <div className="oc-second">
                        <img src={google} alt="google" />
                    </div>

                    <div className="oc-third">
                        <img src={iphone} alt="iphone" />
                    </div>

                    <div className="oc-fourth">
                        <img src={pubg} alt="pubg india" />
                    </div>

                    <div className="oc-fifth">
                        <img src={swiggy} alt="swiggy" />
                    </div>

                </div>

            </section>
        </>
    )
}

export default Client;
