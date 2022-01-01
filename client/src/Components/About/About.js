import React from 'react';
import "./About.css";
import BestInQuality from "./images/BestInQuality.png";

const About = () => {
    return (
        <>
            <section id="about-us">

                <div>
                    <h1 className="au-h"><span className="au-about">About</span> <span className="au-us"> Us </span> </h1>
                </div>

                <div className="au-box">
                    <div className="au-box-1">
                        <img src={BestInQuality} alt="Best Food Quality" />
                            <h1> Best in Quality </h1>
                            <p> We always provide Best Quality Food to our custumer </p>
                            <button className="au-button1"> Explore </button>
                    </div>

                    <div className="au-box-2">
                        <img src="http://s3.thingpic.com/images/Jb/xTZD5TFsZvoMCo2h3MyqBjBp.jpeg" alt="Best in Test" />
                            <h1> Delicious Taste </h1>
                            <p> Our Hotels and Restaurant always deliver you Delicious Food </p>
                            <button className="au-button2"> Explore </button>
                    </div>

                    <div className="au-box-3">
                        <img src="data:image/jpeg;base64,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" alt="Always Fresh Foods" />
                            <h1> Farm Fresh Foods </h1>
                            <p> Our Hotels and Restaurant always use Farm Fresh Foods </p>
                            <button className="au-button3"> Explore </button>
                    </div>

                    <div className="au-box-4">
                        <img src="https://image.freepik.com/free-vector/food-delivery-logo-with-bike-man-courier_1308-48914.jpg" alt=" Fast Delivery" />
                            <h1> On Time Delivery </h1>
                            <p> Our delivery partners deliver your foods fresh and on time </p>
                            <button className="au-button4"> Explore </button>
                    </div>

                    <div className="au-box-5">
                        <img src="https://png.pngtree.com/png-clipart/20200701/original/pngtree-delivery-man-riding-scooter-on-android-tablet-with-city-location-map-png-image_5380726.jpg" alt="Live Order Tracking" />
                            <h1> Live Order Tracking </h1>
                            <p> Know where your order is, from the restaurant to your doorstep </p>
                            <button className="au-button5"> Explore </button>
                    </div>

                    <div className="au-box-6">
                        <img src="https://image.freepik.com/free-vector/twenty-four-service_1017-30335.jpg" alt="24*7 Services" />
                            <h1> 24×7 Custmer Services </h1>
                            <p> You can always place your order anytime and anywhere  </p>
                            <button className="au-button6"> Explore </button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About;
