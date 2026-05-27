import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const BillingInfo = ({ register, errors }) => {
  
  const handlePhoneKeyPress = (e) => {
    const charCode = e.which ? e.which : e.keyCode;

    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
      return;
    }
    if (e.target.value.length === 0 && charCode === 48) {
      e.preventDefault();
    }
  };

  return (
    <div className="checkout-card">
      <div className="checkout-header">
        <div className="header-left">
          <h3>Billing Info</h3>
          <p>Please enter your billing info</p>
        </div>
        <div className="step-indicator">Step 1 of 4</div>
      </div>

      <Row className="g-4">

        {/* NAME */}
        <Col xs={12} md={6}>
          <Form.Group className="validation-field-group">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your name"
              isInvalid={!!errors?.name}
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Minimum 3 characters required" },
                pattern: {
                  value: /^[a-zA-FiIsS\s]+$/,
                  message: "Name can only contain alphabets",
                }
              })}
            />
            {errors?.name && <div className="custom-error-msg">{errors.name.message}</div>}
          </Form.Group>
        </Col>

        {/* PHONE NUMBER */}
        <Col xs={12} md={6}>
          <Form.Group className="validation-field-group">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone number (e.g. 9876543210)"
              maxLength={10} // Compulsory block at 10 digits
              onKeyPress={handlePhoneKeyPress}
              isInvalid={!!errors?.phone}
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[6-9][0-9]{9}$/, // Indian Standard: Starts with 6,7,8,9 and total 10 digits
                  message: "Enter valid 10-digit number without 0 or code",
                },
              })}
            />
            {errors?.phone && <div className="custom-error-msg">{errors.phone.message}</div>}
          </Form.Group>
        </Col>

        {/* ADDRESS */}
        <Col xs={12} md={6}>
          <Form.Group className="validation-field-group">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full address"
              isInvalid={!!errors?.address}
              {...register("address", {
                required: "Address is required",
                minLength: { value: 5, message: "Enter complete address" },
              })}
            />
            {errors?.address && <div className="custom-error-msg">{errors.address.message}</div>}
          </Form.Group>
        </Col>

        {/* TOWN / CITY */}
        <Col xs={12} md={6}>
          <Form.Group className="validation-field-group">
            <Form.Label>Town / City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Town or City"
              isInvalid={!!errors?.city}
              {...register("city", {
                required: "City is required",
              })}
            />
            {errors?.city && <div className="custom-error-msg">{errors.city.message}</div>}
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default BillingInfo;