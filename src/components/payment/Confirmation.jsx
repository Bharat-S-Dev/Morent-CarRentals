import React from "react";
import { Form, Button } from "react-bootstrap";
import SecuritySafety from "../../assets/icon/SecuritySafety.png";

const Confirmation = ({ register, errors }) => {
  return (
    <div className="checkout-card">
      
      <div className="checkout-header">
        <div className="header-left">
          <h3>Confirmation</h3>
          <p>We are getting close to the end. Just check our terms and you are ready.</p>
        </div>
        <div className="step-indicator">
          Step 4 of 4
        </div>
      </div>

      <div className="confirmation-agreements d-flex flex-column gap-3">
        
        <label className={`custom-checkbox-agreement ${errors?.termsAgree ? 'mb-1' : ''}`}>
          <input
            type="checkbox"
            className="custom-input-checkbox"
            {...register("marketingAgree")}
          />
          <span className="agreement-text">
            I agree with sending marketing and newsletter emails.
          </span>
        </label>

        <Form.Group className="position-relative trigger-validation-block">
          <label className={`custom-checkbox-agreement ${errors?.termsAgree ? 'invalid-border-highlight' : ''}`}>
            <input
              type="checkbox"
              className="custom-input-checkbox"
              {...register("termsAgree", {
                required: "You must agree to the terms to book a rental",
              })}
            />
            <span className="agreement-text">
              I agree with our terms and conditions and privacy policy.
            </span>
          </label>
          

          {errors?.termsAgree && (
            <div className="invalid-feedback d-block position-absolute bottom-0 translate-y-100 ps-1">
              {errors.termsAgree.message}
            </div>
          )}
        </Form.Group>
      </div>

      <div className="action-trigger-block mt-4 pt-2">
        <Button
          type="submit"
          className="rent-now-btn fw-semibold"
        >
          Rent Now
        </Button>
      </div>

      <div className="confirmation-safety-box d-flex align-items-start gap-3 mt-4 pt-2">
        <div className="security-icon-wrapper flex-shrink-0">
          <img
            src={SecuritySafety}
            alt="Secure transaction shield protection lock"
            className="security-icon"
          />
        </div>
        <div className="safety-content">
          <h5>All your data are safe</h5>
          <p className="m-0">
            We are using advanced security layers and direct bank encryption to process your transactions safely.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Confirmation;