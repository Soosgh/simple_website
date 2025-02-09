import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Home.css"; // Import CSS for custom styling
import Begining from "../Begining/Begining";
import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Container fluid >
                <Begining />
                <Portfolio />
                <About />
                <Contact />

            </Container>

        </>
    );
};

export default Home;
