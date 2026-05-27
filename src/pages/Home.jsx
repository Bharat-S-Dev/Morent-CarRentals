import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import HeroSection from "../components/hero/HeroSection";
import PickDropSection from "../components/pickup-dropoff/PickDropSection";
import CarCard from "../components/car-card/CarCard";

const Home = () => {
  const navigate = useNavigate();
  const cars = useSelector((state) => state.car.cars);

  const popularCars = cars.filter((car) => car.isPopular);
  const recommendedCars = cars.filter((car) => !car.isPopular);

  return (
    <div className="home-page-wrapper pb-5">
      <HeroSection />
      <PickDropSection />

      <Container fluid="lg" className="mt-4 px-3 px-md-4">
        
        <div className="section-label d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-muted fw-semibold m-0 text-uppercase tracking-wider">
            Popular Car
          </h5>
          <span className="view-all-link fw-semibold" onClick={() => navigate("/category")}>
            View All
          </span>
        </div>

        <div className="popular-cars-scroll-container mb-5">
          <div className="d-flex flex-nowrap flex-md-wrap gap-4 overflow-x-auto pb-3 custom-scrollbar">
            {popularCars.map((car) => (
              <div key={car.id} className="popular-car-item flex-shrink-0">
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>

        <div className="section-label mb-3">
          <h5 className="text-muted fw-semibold m-0 text-uppercase tracking-wider">
            Recommendation Car
          </h5>
        </div>


        <Row className="g-4 mb-5">
          {recommendedCars.slice(0, 8).map((car) => (
            <Col key={car.id} xs={12} sm={6} md={6} lg={4} xl={3} className="d-flex justify-content-center">
              <div className="w-100">
                <CarCard car={car} />
              </div>
            </Col>
          ))}
        </Row>

    
        <div className="show-more-wrapper mt-4">
          <Button className="btn-show-more" onClick={() => navigate("/category")}>
            Show More Car
          </Button>
          
          <span className="car-count-badge d-none d-md-inline">
            {recommendedCars.length > 8 ? "120 Car" : `${recommendedCars.length} Car`}
          </span>
        </div>

      </Container>
    </div>
  );
};

export default Home;