import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "./Portfolio.css"; // Import custom CSS for styling

const portfolioItems = [
    { id: 1, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png" },
    { id: 2, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png" },
    { id: 3, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png" },
    { id: 4, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png" },
    { id: 5, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png" },
    { id: 6, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png" },
];

const Portfolio = () => {
    return (
        <Container fluid className="text-center py-5  pb-5">
            <h2 className=" fw-bold text-uppercase display-4" style={{ color: '#02213f' }}>Portfolio</h2>
            <div className="divider">
                <div className="line"></div>
                <span className="star">★</span>
                <div className="line"></div>
            </div>
            <Row>
                {portfolioItems.map((item) => (
                    <Col md={4} key={item.id} className="mb-4">
                        <Card className="portfolio-card">
                            <Card.Img variant="top" src={item.img} className="portfolio-img" />
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Portfolio;
