import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
    return (
        <Container fluid className="contact-container">
            <h2 className="contact-title">CONTACT ME</h2>
            <div className="divider">
                <div className="line"></div>
                <span className="star">★</span>
                <div className="line"></div>
            </div>

            <Form className="contact-form">
                <Form.Group controlId="fullName">
                    <Form.Control type="text" placeholder="Full name" />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Email address" />
                </Form.Group>

                <Form.Group controlId="phone">
                    <Form.Control type="text" placeholder="Phone number" />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Control as="textarea" rows={4} placeholder="Message" />
                </Form.Group>

                <Button type="submit" className="send-button">Send</Button>
            </Form>
        </Container>
    );
};

export default Contact;

