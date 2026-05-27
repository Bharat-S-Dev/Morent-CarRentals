import React from "react";
import { Row, Col, Form } from "react-bootstrap";

import Paypal from "../../assets/icon/PayPal.png";
import Bitcoin from "../../assets/icon/Bitcoin.png";
import Visa from "../../assets/icon/Visa.png";

const PaymentMethod = ({
  register,
  errors,
  paymentMethod,
  setPaymentMethod,
  watchedCardNum,
  watchedCardHolder,
  watchedCardExpiry,
  formatCardNumber,
  formatExpiry,
}) => {
  return (
    <div className="checkout-card">
      
      <div className="checkout-header">
        <div className="header-left">
          <h3>Payment Method</h3>
          <p>Please enter your payment method</p>
        </div>
        <div className="step-indicator">
          Step 3 of 4
        </div>
      </div>

      {/* ====================CREDIT CARD ==================== */}
      <div
        className={`payment-method-selector ${paymentMethod === "credit-card" ? "active" : ""}`}
        onClick={() => setPaymentMethod("credit-card")}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center gap-2">
            <Form.Check
              type="radio"
              id="pm-cc"
              name="payment-method"
              checked={paymentMethod === "credit-card"}
              onChange={() => setPaymentMethod("credit-card")}
            />
            <label htmlFor="pm-cc" className="fw-bold m-0 text-dark label-clickable">
              Credit Card
            </label>
          </div>
          <div className="provider-logo-box">
            <img src={Visa} alt="Visa Logo" className="payment-provider-logo" />
          </div>
        </div>

    
        {paymentMethod === "credit-card" && (
          <div className="credit-card-form-wrapper pt-2" onClick={(e) => e.stopPropagation()}>
            
            {/* LIVE DIGITAL CARD PREVIEW */}
            <div className="credit-card-preview">
              <div className="card-top">
                <div className="card-label">MORENT CARD</div>
                <div className="card-chip"></div>
              </div>
              <div className="card-number">
                {watchedCardNum || "•••• •••• •••• ••••"}
              </div>
              <div className="card-bottom">
                <div>
                  <div className="holder-label">Card Holder</div>
                  <div className="holder-val text-uppercase">
                    {watchedCardHolder || "YOUR FULL NAME"}
                  </div>
                </div>
                <div>
                  <div className="expiry-label">Expires</div>
                  <div className="expiry-val">
                    {watchedCardExpiry || "MM/YY"}
                  </div>
                </div>
              </div>
            </div>

         
            <Row className="g-4">
           
              <Col xs={12} md={6}>
                <Form.Group className="position-relative">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Card number (16 digits)"
                    maxLength={19}
                    isInvalid={!!errors?.cardNumber}
                    {...register("cardNumber", {
                      required: paymentMethod === "credit-card" ? "Card number is required" : false,
                      pattern: {
                        value: /^(?:\d{4}\s?){4}$/,
                        message: "Please enter a valid 16-digit number",
                      },
                    })}
                    onChange={(e) => {
                      if (formatCardNumber) {
                        e.target.value = formatCardNumber(e.target.value);
                      }
                    }}
                  />
                  {errors?.cardNumber && (
                    <Form.Control.Feedback type="invalid" className="d-block position-absolute bottom-0 translate-y-100 mt-1 ps-1">
                      {errors.cardNumber.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>

          
              <Col xs={12} md={6}>
                <Form.Group className="position-relative">
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    maxLength={5}
                    isInvalid={!!errors?.cardExpiry}
                    {...register("cardExpiry", {
                      required: paymentMethod === "credit-card" ? "Expiry date is required" : false,
                      pattern: {
                        value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                        message: "Use format MM/YY",
                      },
                    })}
                    onChange={(e) => {
                      if (formatExpiry) {
                        e.target.value = formatExpiry(e.target.value);
                      }
                    }}
                  />
                  {errors?.cardExpiry && (
                    <Form.Control.Feedback type="invalid" className="d-block position-absolute bottom-0 translate-y-100 mt-1 ps-1">
                      {errors.cardExpiry.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>

              {/* Card Holder input column */}
              <Col xs={12} md={6}>
                <Form.Group className="position-relative">
                  <Form.Label>Card Holder</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Card holder name"
                    isInvalid={!!errors?.cardHolder}
                    {...register("cardHolder", {
                      required: paymentMethod === "credit-card" ? "Cardholder name is required" : false,
                      minLength: {
                        value: 3,
                        message: "Enter valid cardholder name",
                      },
                    })}
                  />
                  {errors?.cardHolder && (
                    <Form.Control.Feedback type="invalid" className="d-block position-absolute bottom-0 translate-y-100 mt-1 ps-1">
                      {errors.cardHolder.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>

              {/* CVV input column */}
              <Col xs={12} md={6}>
                <Form.Group className="position-relative">
                  <Form.Label>CVC</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="CVC (3 digits)"
                    maxLength={3}
                    isInvalid={!!errors?.cardCvv}
                    {...register("cardCvv", {
                      required: paymentMethod === "credit-card" ? "CVC code is required" : false,
                      pattern: {
                        value: /^\d{3}$/,
                        message: "Enter a valid 3-digit CVV",
                      },
                    })}
                  />
                  {errors?.cardCvv && (
                    <Form.Control.Feedback type="invalid" className="d-block position-absolute bottom-0 translate-y-100 mt-1 ps-1">
                      {errors.cardCvv.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
            </Row>
          </div>
        )}
      </div>

      {/* ==================== PAYPAL ==================== */}
      <div
        className={`payment-method-selector ${paymentMethod === "paypal" ? "active" : ""}`}
        onClick={() => setPaymentMethod("paypal")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <Form.Check
              type="radio"
              id="pm-paypal"
              name="payment-method"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
            />
            <label htmlFor="pm-paypal" className="fw-bold m-0 text-dark label-clickable">
              PayPal
            </label>
          </div>
          <div className="provider-logo-box">
            <img src={Paypal} alt="PayPal Logo" className="payment-provider-logo" />
          </div>
        </div>
      </div>

      {/* ==================== BITCOIN ==================== */}
      <div
        className={`payment-method-selector ${paymentMethod === "bitcoin" ? "active" : ""}`}
        onClick={() => setPaymentMethod("bitcoin")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <Form.Check
              type="radio"
              id="pm-btc"
              name="payment-method"
              checked={paymentMethod === "bitcoin"}
              onChange={() => setPaymentMethod("bitcoin")}
            />
            <label htmlFor="pm-btc" className="fw-bold m-0 text-dark label-clickable">
              Bitcoin
            </label>
          </div>
          <div className="provider-logo-box">
            <img src={Bitcoin} alt="Bitcoin Logo" className="payment-provider-logo" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default PaymentMethod;