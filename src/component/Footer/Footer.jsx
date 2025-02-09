import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <Container fluid>
                <Row className="text-center text-white">
                    {/* Location Section */}
                    <Col md={4} className="footer-section">
                        <h5 className="footer-title">LOCATION</h5>
                        <p>2215 John Daniel Drive <br /> Clark, MO 65243</p>
                    </Col>

                    {/* Social Media Section */}
                    <Col md={4} className="footer-section">
                        <h5 className="footer-title">AROUND THE WEB</h5>
                        <div className="social-icons">
                            <span className="icon"><FaFacebookF /></span>
                            <span className="icon"><FaTwitter /></span>
                            <span className="icon"><FaLinkedinIn /></span>
                            <span className="icon"><FaDribbble /></span>
                        </div>
                    </Col>

                    {/* About Section */}
                    <Col md={4} className="footer-section">
                        <h5 className="footer-title">ABOUT FREELANCER</h5>
                        <p>
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="https://startbootstrap.com" target="_blank" rel="noopener noreferrer" className="footer-link"> Start Bootstrap</a>.
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>Copyright © Your Website 2023</p>
            </div>
        </footer>
    );
};

export default Footer;

