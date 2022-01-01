import React from 'react';
import "./Home.css";

const Home = () => {
    return (
        <>
            <section id="home">
                <h1> WelCome to <span className="h-my">My</span><span className="h-meals">Meals</span> </h1>
                <p> Ordre your faviourate food from your nearest Hotel and Restaurant let's order your Meals from MyMeals  </p>
                <p> Best in Quality,  Awsome in Taste and Always Fresh Meals  </p>
                <button className="button"> Order Now </button>
            </section>
        </>
    )
}

export default Home;
