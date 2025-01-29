import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Home.css"; // Import CSS for custom styling

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="profile-container">
                    <img
                        src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
                        alt="Profile"
                        className="profile-img"
                    />
                </div>
                <h1 className="title">START BOOTSTRAP</h1>
                <div className="dividerr">
                    <div className="linee"></div>
                    <span className="starr">★</span>
                    <div className="linee"></div>
                </div>
                <p className="subtitle">Graphic Artist - Web Designer - Illustrator</p>
            </div>

            <Portfolio />
            <About />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
