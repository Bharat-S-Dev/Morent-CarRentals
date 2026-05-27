import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-wrapper d-flex align-items-center justify-content-center py-5 min-vh-75">
      <Container className="text-center">
        <div className="display-1 fw-bold text-primary mb-2" style={{ letterSpacing: "4px" }}>
          404
        </div>
        
        <h1 className="fw-bold mb-3 text-dark" style={{ fontSize: "28px" }}>
          Oops! Page Not Found
        </h1>
        
        <p className="text-secondary mx-auto mb-4" style={{ maxWidth: "450px", fontSize: "15px", lineHeight: "1.6" }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track!
        </p>

        <Button
          onClick={() => navigate("/")}
          className="px-5 py-2.5 border-0 fw-bold shadow-sm rent-now-btn"
          style={{ borderRadius: "10px", fontSize: "15px" }}
        >
          Back to Home
        </Button>
      </Container>
    </div>
  );
};

export default NotFound;
