import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import "../components/contact.css"; //

const Contact = () => {
  return (
    <>
      <Container className=" contact-section">
        <h2 className="text-center fw-bold">Contact</h2>

        <p className="text-center text-muted">
          Pour me contacter en vue d’un entretien ou d’une future collaboration,
          merci de remplir le formulaire de contact.
        </p>

        <div className="line"></div>

        <Row>
          <Col xs={12} md={6}>
            <h5 className="contact-subtitle">Formulaire de contact</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formNom">
                <Form.Label>Votre nom</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Votre adresse email</Form.Label>
                <Form.Control type="email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formTel">
                <Form.Label>Votre numéro de téléphone</Form.Label>
                <Form.Control type="tel" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSujet">
                <Form.Label>Sujet</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Votre message</Form.Label>
                <Form.Control as="textarea" rows={4} required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Envoyer
              </Button>
            </Form>
          </Col>

          <Col xs={12} md={6}>
            <h5 className="contact-subtitle">Mes coordonnées</h5>
            <p>
              <strong>John Doe</strong>
            </p>
            <p>
              <i class="bi bi-map me-2"></i>40 rue Laure Diebold
              <br />
              <i class="bi bi-geo-alt me-2"></i>69009 Lyon, France
              <br />
              <i class="bi bi-phone me-1"></i> 10 20 30 40 50
              <br />
              <i class="bi bi-envelope-at me-2"></i>john.doe@gmail.com
            </p>

            <div className="mt-3">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.237372147268!2d4.7953298!3d45.7833865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ebd3d6794d1f%3A0xc896b689a23bcbaa!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
