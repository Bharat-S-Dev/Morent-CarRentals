import React, { useState } from "react";
import { Container, Row, Col, Offcanvas, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FiFilter } from "react-icons/fi";

import { resetFilters } from "../redux/slices/carSlice";
import CarCard from "../components/car-card/CarCard";
import PickDropSection from "../components/pickup-dropoff/PickDropSection";
import FilterSidebar from "../components/filter/FilterSidebar";

const Category = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car.cars);
  const filters = useSelector((state) => state.car.filters);
  const searchQuery = useSelector((state) => state.car.searchQuery);

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      searchQuery === "" ||
      car.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesType =
      filters.types.length === 0 || filters.types.includes(car.type);

    const matchesCapacity =
      filters.capacities.length === 0 ||
      filters.capacities.includes(Number(car.capacity));

    const matchesPrice = car.price <= Number(filters.maxPrice);

    return matchesSearch && matchesType && matchesCapacity && matchesPrice;
  });

  return (
    <div className="category-container">
      <aside className="sidebar-filter d-none d-lg-block">
        <FilterSidebar />
      </aside>

      <Offcanvas
        show={showMobileFilters}
        onHide={() => setShowMobileFilters(false)}
        placement="start"
        className="mobile-filter-drawer p-3"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold text-dark">Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FilterSidebar />
        </Offcanvas.Body>
      </Offcanvas>

      <div className="category-content w-100">
        <div className="d-flex d-lg-none justify-content-between align-items-center mb-4 px-2">
          <Button
            variant="white"
            className="mobile-filter-btn border d-flex align-items-center gap-2 px-3 py-2 fw-semibold"
            onClick={() => setShowMobileFilters(true)}
          >
            <FiFilter /> Filters
          </Button>
          <span className="mobile-car-count fw-semibold">
            {filteredCars.length} Cars Available
          </span>
        </div>

        <div className="category-pickdrop-wrapper mb-4">
          <PickDropSection variant="category" />
        </div>

        {filteredCars.length > 0 ? (
          <Row className="g-3 g-md-4">
            {filteredCars.map((car) => (
              <Col key={car.id} xs={12} sm={6} md={6} lg={6} xl={4}>
                <CarCard car={car} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="empty-filter-state text-center py-5 rounded bg-white mt-4 border">
            <h4 className="fw-bold text-dark mb-2">No Cars Match Your Filters</h4>
            <p className="text-secondary mb-4">
              Try adjusting the price range, car type, or capacities.
            </p>
            <Button
              className="reset-filter-btn px-4 py-2 border-0 fw-semibold"
              onClick={() => dispatch(resetFilters())}
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;