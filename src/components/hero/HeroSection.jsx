import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import Car1 from "../../assets/background/car11.png";
import Car2 from "../../assets/background/car12.png";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero-section py-3 py-md-4">
      <Container fluid="lg" className="px-3 px-md-4">
        <Row className="g-4">

          {/* LEFT CARD */}
          <Col xs={12} lg={6}>
            <div className="hero-card left-card d-flex flex-column justify-content-between">
              <div className="hero-content">
                <h1 className="hero-title">The Best Platform <br className="d-none d-sm-inline" /> for Car Rental</h1>
                <p className="hero-desc">Ease of doing a car rental safely and reliably.</p>

                <Button className="hero-btn"
                  onClick={() => navigate("/category")}
                >
                  Rental Car
                </Button>
              </div>
              <div className="hero-img-wrapper">
                <img src={Car1} alt="Car 1" className="hero-car" />
              </div>
            </div>
          </Col>

          <Col lg={6} className="d-none d-lg-block">
            <div className="hero-card right-card d-flex flex-column justify-content-between">
              <div className="hero-content">
                <h1 className="hero-title">Easy way to rent <br className="d-none d-sm-inline" /> a car at low price</h1>
                <p className="hero-desc">Providing cheap car rental services and safe facilities.</p>
                <Button className="hero-btn second-btn"
                  onClick={() => navigate("/category")}
                >
                  Rental Car
                </Button>
              </div>
              <div className="hero-img-wrapper">
                <img src={Car2} alt="Car 2" className="hero-car" />
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;