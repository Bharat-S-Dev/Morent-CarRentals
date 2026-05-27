import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";

import { toggleWishlist } from "../redux/slices/carSlice";
import CarCard from "../components/car-card/CarCard";
import CarReviews from "../components/reviews/CarReviews";

import InteriorThumb from "../assets/carview/carview2.png"; 
import SeatsThumb from "../assets/carview/carview3.png";    

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.car.cars);
  const wishlist = useSelector((state) => state.car.wishlist);

  const car = cars.find((c) => c.id === id);

  const [activeImage, setActiveImage] = useState(car ? car.image : null);

  useEffect(() => {
    if (car) {
      setActiveImage(car.image);
    }
  }, [car, id]);

  if (!car) {
    return (
      <Container className="py-5 text-center">
        <h3 className="fw-bold text-dark">Car Not Found</h3>
        <Button className="border-0 px-4 py-2 mt-3 rent-now-btn" onClick={() => navigate("/")}>
          Go Back Home
        </Button>
      </Container>
    );
  }

  const isLiked = wishlist.includes(car.id);
  
  const galleryThumbnails = [
    { id: "main", src: car.image, isMain: true },
    { id: "interior", src: InteriorThumb, isMain: false },
    { id: "seats", src: SeatsThumb, isMain: false }
  ];

  const isMainActive = activeImage === car.image;

  const recentCars = cars.filter((c) => c.id !== car.id).slice(0, 4);
  const recommendationCars = cars.filter((c) => c.id !== car.id).slice(4, 8);

  return (
    <div className="details-view-wrapper pb-5">
      <Container fluid="lg" className="pt-4 pt-md-5 px-3 px-md-4">
        <Row className="g-4">
          
          <Col xs={12} lg={6}>
            <div className="detail-gallery">
              <div className={`detail-main-card d-flex flex-column ${isMainActive ? 'justify-content-between brand-bg-pattern' : 'justify-content-center full-image-view'}`}>
                {isMainActive && (
                  <>
                    <div className="gallery-pattern"></div>
                    <div className="gallery-header-meta">
                      <h2>Sports car with the best design and acceleration</h2>
                      <p>Safety and comfort inside a futuristic and elegant sports car</p>
                    </div>
                  </>
                )}
                <div className="main-car-image-box">
                  <img 
                    src={activeImage} 
                    alt={car.name} 
                    className={isMainActive ? "gallery-main-car" : "gallery-full-bleed-img"} 
                  />
                </div>
              </div>

              <div className="detail-thumbnails d-flex justify-content-between gap-3">
                {galleryThumbnails.map((thumb) => (
                  <button
                    key={thumb.id}
                    className={`thumb-btn ${activeImage === thumb.src ? "active" : ""}`}
                    onClick={() => setActiveImage(thumb.src)}
                  >
                    <div className={`thumb-inner ${thumb.isMain ? 'first-thumb-spec-bg' : ''}`}>
                      <img 
                        src={thumb.src} 
                        alt={`${car.name} thumb view`} 
                        className={thumb.isMain ? "main-thumb-car-fix" : "static-thumb-img"}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </Col>

          <Col xs={12} lg={6}>
            <div className="detail-info-card">
              <div className="info-header d-flex justify-content-between align-items-start">
                <div>
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <h1 className="m-0">{car.name}</h1>
                    <span className="custom-badge badge-primary">Beginner</span>
                  </div>
                  <div className="info-rating d-flex align-items-center gap-2 mt-2">
                    <div className="stars-row">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < Math.floor(car.rating) ? <FaStar key={i} /> : <FaRegStar key={i} />
                      )}
                    </div>
                    <span className="reviews-count">{car.reviewsCount}+ Reviewer</span>
                  </div>
                </div>
                <button
                  className={`info-heart ${isLiked ? "liked" : ""}`}
                  onClick={() => dispatch(toggleWishlist(car.id))}
                >
                  <FaHeart />
                </button>
              </div>

              <p className="info-description">{car.description}</p>

              <div className="info-specs-grid">
                <div className="spec-row d-flex justify-content-between">
                  <span className="spec-name">Type Car</span>
                  <span className="spec-val">{car.type}</span>
                </div>
                <div className="spec-row d-flex justify-content-between">
                  <span className="spec-name">Capacity</span>
                  <span className="spec-val">{car.capacity} Person</span>
                </div>
                <div className="spec-row d-flex justify-content-between">
                  <span className="spec-name">Steering</span>
                  <span className="spec-val">{car.transmission}</span>
                </div>
                <div className="spec-row d-flex justify-content-between">
                  <span className="spec-name">Gasoline</span>
                  <span className="spec-val">{car.fuel}</span>
                </div>
              </div>

              <div className="info-pricing-action d-flex justify-content-between align-items-center mt-auto">
                <div className="price-block">
                  <div className="price-val">
                    ${car.price.toFixed(2)}/<span>day</span>
                  </div>
                  {car.originalPrice && (
                    <span className="original-val">${car.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <button
                  className="rent-now-btn fw-semibold"
                  onClick={() => navigate(`/payment/${car.id}`)}
                >
                  Rent Now
                </button>
              </div>
            </div>
          </Col>
        </Row>

        <CarReviews carId={car.id} reviews={car.reviews} />

        <div className="details-bottom-cars-scroller-area mt-5">
          <div className="section-label d-flex justify-content-between align-items-center mb-3">
            <h4>Recent Car</h4>
            <span className="view-all-link" onClick={() => navigate("/category")}>View All</span>
          </div>
          <div className="cars-horizontal-flex-scroller mb-5">
            <div className="d-flex flex-nowrap flex-md-wrap gap-4 overflow-x-auto pb-2 custom-scrollbar">
              {recentCars.map((c) => (
                <div key={c.id} className="details-page-car-item flex-shrink-0">
                  <CarCard car={c} />
                </div>
              ))}
            </div>
          </div>

          <div className="section-label d-flex justify-content-between align-items-center mb-3">
            <h4>Recommendation Car</h4>
            <span className="view-all-link" onClick={() => navigate("/category")}>View All</span>
          </div>
          <div className="cars-horizontal-flex-scroller">
            <div className="d-flex flex-nowrap flex-md-wrap gap-4 overflow-x-auto pb-2 custom-scrollbar">
              {recommendationCars.map((c) => (
                <div key={c.id} className="details-page-car-item flex-shrink-0">
                  <CarCard car={c} />
                </div>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default CarDetails;
