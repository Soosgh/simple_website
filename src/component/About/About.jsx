import React from "react";
import './About.css';
import { Container } from "react-bootstrap";
import { FaDownload } from "react-icons/fa";

const About = () => {
    return (
        <Container fluid>
            <div className="text-center py-5" style={{ background: 'rgb(75 183 149)  ' }}>
                <h2 className="about-title">ABOUT </h2>
                <div className="divider">
                    <div className="line_"></div>
                    <span className="star_">★</span>
                    <div className="line_"></div>
                </div>

                <div className="side_by_side">
                    <div className="left">
                        <p>Freelancer is a free bootstrap theme created by<br />Start Bootstrap. The download includes the<br /> complete source files including HTML, CSS, and JavaScript <br /> as well as optional SASS stylesheets<br />  for easy customization.</p>
                    </div>
                    <div className="right">
                        <p>You can create your own custom avatar for the<br /> masthead, change the icon in the dividers, and<br /> add your email address to the contact form <br />to make it fully functional!</p>
                    </div>


                </div>

                <button style={{ fontSize: "20px", padding: "10px", background: "rgb(75 183 149) ", color: "white", border: "1px solid white", borderRadius: "5px", cursor: "pointer" }}>
                    <FaDownload style={{ marginRight: "5px" }} />
                    Free Download!
                </button>
            </div>
        </Container>

    );
};

export default About;
