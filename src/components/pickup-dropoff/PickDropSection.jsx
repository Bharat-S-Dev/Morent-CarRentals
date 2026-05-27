import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";

import Mark2 from "../../assets/icon/mark2.png";
import Mark3 from "../../assets/icon/mark3.png";

import {
  setPickupLocation,
  setDropoffLocation,
  setPickupDate,
  setDropoffDate,
  setPickupTime,
  setDropoffTime,
  swapLocations,
} from "../../redux/slices/rentalSlice";

const cities = ["Paris", "London", "Tokyo"];

const PickDropSection = ({ variant }) => {
  const dispatch = useDispatch();
  const rental = useSelector((state) => state.rental);

  const isCategoryView = variant === "category";

  return (
    <section className={`pickdrop-section py-2 ${isCategoryView ? 'category-pickdrop-reset' : 'py-md-4'}`}>
      <Container fluid={isCategoryView} className={isCategoryView ? "p-0" : "px-3 px-md-4"}>
        <Row className={`align-items-center position-relative g-3 ${isCategoryView ? 'row-gap-3' : 'g-lg-0'}`}>

          <Col xs={12} lg={isCategoryView ? 12 : 5} xl={isCategoryView ? 5 : 5}>
            <div className="pick-card">
              <div className="pick-header">
                <span className="mark-icon">
                  <img src={Mark2} alt="Pickup indicator" />
                </span>
                <h5>Pick - Up</h5>
              </div>

              <Row className="g-2 g-sm-3">
                <Col xs={4}>
                  <div className="pick-field">
                    <h6>Locations</h6>
                    <Form.Select
                      className="pick-input-element"
                      value={rental.pickupLocation || ""}
                      onChange={(e) => dispatch(setPickupLocation(e.target.value))}
                    >
                      <option value="">Select city</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </Col>

                <Col xs={4}>
                  <div className="pick-field border-center-divider">
                    <h6>Date</h6>
                    <Form.Control
                      type="date"
                      className="pick-input-element"
                      value={rental.pickupDate || ""}
                      onChange={(e) => dispatch(setPickupDate(e.target.value))}
                    />
                  </div>
                </Col>

                <Col xs={4}>
                  <div className="pick-field">
                    <h6>Time</h6>
                    <Form.Control
                      type="time"
                      className="pick-input-element"
                      value={rental.pickupTime || ""}
                      onChange={(e) => dispatch(setPickupTime(e.target.value))}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={12} lg={isCategoryView ? 12 : 2} xl={isCategoryView ? 2 : 2} className="swap-col-wrapper">
            <Button
              variant="primary"
              className="swap-action-button"
              onClick={() => dispatch(swapLocations())}
            >
              <HiOutlineSwitchVertical size={24} />
            </Button>
          </Col>

          <Col xs={12} lg={isCategoryView ? 12 : 5} xl={isCategoryView ? 5 : 5}>
            <div className="pick-card">
              <div className="pick-header">
                <span className="mark-icon">
                  <img src={Mark3} alt="Dropoff indicator" />
                </span>
                <h5>Drop - Off</h5>
              </div>

              <Row className="g-2 g-sm-3">
                <Col xs={4}>
                  <div className="pick-field">
                    <h6>Locations</h6>
                    <Form.Select
                      className="pick-input-element"
                      value={rental.dropoffLocation || ""}
                      onChange={(e) => dispatch(setDropoffLocation(e.target.value))}
                    >
                      <option value="">Select city</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Select>
                  </div>
                </Col>

                <Col xs={4}>
                  <div className="pick-field border-center-divider">
                    <h6>Date</h6>
                    <Form.Control
                      type="date"
                      className="pick-input-element"
                      value={rental.dropoffDate || ""}
                      onChange={(e) => dispatch(setDropoffDate(e.target.value))}
                    />
                  </div>
                </Col>

                <Col xs={4}>
                  <div className="pick-field">
                    <h6>Time</h6>
                    <Form.Control
                      type="time"
                      className="pick-input-element"
                      value={rental.dropoffTime || ""}
                      onChange={(e) => dispatch(setDropoffTime(e.target.value))}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default PickDropSection;