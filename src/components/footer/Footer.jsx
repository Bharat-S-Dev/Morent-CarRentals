import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../assets/logo/Logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-wrapper py-4 py-md-5 mt-auto">
      <Container fluid="lg" className="px-3 px-md-4">
        
        {/* TOP LAYER: BRAND INFO & LINKS LINKS MATRIX GRID */}
        <Row className="gy-4 mb-4 mb-md-5">
          {/* Logo & Tagline text column block */}
          <Col xs={12} lg={6} className="footer-brand-section">
            <div className="brand-content-box">
              <button
                onClick={scrollToTop}
                className="footer-logo-btn mb-3"
                aria-label="Scroll to top of page"
              >
                <img
                  src={Logo}
                  alt="MORENT Application branding logo"
                  className="img-fluid"
                />
              </button>
              <p className="footer-tagline">
                Our vision is to provide convenience and help increase your sales business.
              </p>
            </div>
          </Col>

          {/* Nav Links column links items block */}
          <Col xs={12} lg={6}>
            {/* xs={6} md={4} configuration ensures perfect inline fit without broken layouts */}
            <Row className="gy-4 row-cols-2 row-cols-sm-3">
              <Col className="footer-links-column">
                <h5 className="footer-links-title">About</h5>
                <ul className="footer-links-list">
                  <li>How it works</li>
                  <li>Featured</li>
                  <li>Partnership</li>
                  <li>Business Relation</li>
                </ul>
              </Col>

              <Col className="footer-links-column">
                <h5 className="footer-links-title">Community</h5>
                <ul className="footer-links-list">
                  <li>Events</li>
                  <li>Blog</li>
                  <li>Podcast</li>
                  <li>Invite a friend</li>
                </ul>
              </Col>

              <Col xs={12} className="footer-links-column col-sm-4">
                <h5 className="footer-links-title">Socials</h5>
                <ul className="footer-links-list">
                  <li>Discord</li>
                  <li>Instagram</li>
                  <li>Twitter</li>
                  <li>Facebook</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>

        <div className="footer-bottom pt-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
          <div className="footer-legal-links d-flex order-1 order-md-2 justify-content-between justify-content-md-end">
            <span className="footer-policy-link">Privacy & Policy</span>
            <span className="footer-policy-link">Terms & Condition</span>
          </div>

          <p className="copyright order-2 order-md-1 text-md-start text-start">
            &copy;2026 MORENT. All rights reserved
          </p>
        </div>

      </Container>
    </footer>
  );
};

export default Footer;


