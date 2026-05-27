import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTypeFilter,
  toggleCapacityFilter,
  setMaxPrice,
  resetFilters,
} from "../../redux/slices/carSlice";

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car.cars);
  const filters = useSelector((state) => state.car.filters);

  const carTypes = ["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"];
  const capacities = [2, 4, 6, 8];

  const getTypeCount = (type) => cars.filter((c) => c.type === type).length;
  const getCapacityCount = (cap) => cars.filter((c) => c.capacity === cap).length;

  return (
    <div className="filter-wrapper-content d-flex flex-column gap-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="m-0 filter-main-heading">Filters</h5>
        <Button
          variant="link"
          className="filter-reset-link p-0 text-decoration-none"
          onClick={() => dispatch(resetFilters())}
        >
          Reset All
        </Button>
      </div>

      {/* Type Filter */}
      <div className="filter-group">
        <div className="filter-group-title">Type</div>
        {carTypes.map((type) => (
          <label key={type} className="filter-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <input
                type="checkbox"
                className="custom-filter-checkbox"
                checked={filters.types.includes(type)}
                onChange={() => dispatch(toggleTypeFilter(type))}
              />
              <span className="filter-label-text">{type}</span>
            </div>
            <span className="item-count">({getTypeCount(type)})</span>
          </label>
        ))}
      </div>

      {/* Capacity Filter */}
      <div className="filter-group">
        <div className="filter-group-title">Capacity</div>
        {capacities.map((cap) => (
          <label key={cap} className="filter-item d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-3">
              <input
                type="checkbox"
                className="custom-filter-checkbox"
                checked={filters.capacities.includes(cap)}
                onChange={() => dispatch(toggleCapacityFilter(cap))}
              />
              <span className="filter-label-text">{cap} Person</span>
            </div>
            <span className="item-count">({getCapacityCount(cap)})</span>
          </label>
        ))}
      </div>

      {/* Price Slider */}
      <div className="filter-group">
        <div className="filter-group-title">Price</div>
        <div className="price-slider-wrapper">
          <input
            type="range"
            min="70"
            max="100"
            value={filters.maxPrice}
            onChange={(e) => dispatch(setMaxPrice(e.target.value))}
            className="price-slider"
          />
          <div className="price-value-label">
            Max. ${Number(filters.maxPrice).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;