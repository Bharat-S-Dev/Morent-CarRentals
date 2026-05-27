import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const RentalSummary = ({
  car,
  rentalDays,
  subtotal,
  tax,
  discountAmount,
  discountPercent,
  total,
  couponCode,
  setCouponCode,
  handleApplyCoupon,
}) => {
  return (
    <div className="summary-card">
      <h3>Rental Summary</h3>

      <p className="summary-desc">
        Prices may change depending on the length of the rental and the car of your choice.
      </p>

      <div className="car-brief">
        <div className="car-brief-img-wrapper">
          <img src={car.image} alt={`${car.name} summary thumbnail`} />
        </div>

        <div className="brief-info">
          <h4>{car.name}</h4>

          <div className="brief-rating">
            <div className="d-flex align-items-center gap-1 stars-group-tint">
              {[1, 2, 3, 4, 5].map((star) =>
                star <= Math.round(car.rating) ? (
                  <FaStar key={star} />
                ) : (
                  <FaRegStar key={star} />
                )
              )}
            </div>

            <span className="fw-semibold metrics-count-text">
              {car.rating.toFixed(1)}{" "}
              <span className="text-muted fw-normal">
                ({car.reviewsCount} Reviews)
              </span>
            </span>
          </div>
        </div>
      </div>

  
      <div className="summary-calc">
        {/* Rental Duration Row */}
        <div className="calc-row">
          <span className="calc-name">Rental Duration</span>
          <span className="calc-val">{rentalDays} Day(s)</span>
        </div>

        {/* Subtotal Row */}
        <div className="calc-row">
          <span className="calc-name">Subtotal</span>
          <span className="calc-val">${subtotal.toFixed(2)}</span>
        </div>

        {/* Tax Row */}
        <div className="calc-row">
          <span className="calc-name">Tax (10% VAT)</span>
          <span className="calc-val">${tax.toFixed(2)}</span>
        </div>

      
        {discountAmount > 0 && (
          <div className="calc-row coupon-active-discount-row">
            <span className="calc-name alert-text-highlight">
              Coupon Discount ({discountPercent}%)
            </span>
            <span className="calc-val alert-text-highlight">
              -${discountAmount.toFixed(2)}
            </span>
          </div>
        )}
      </div>

    
      <div className="promo-code-box">
        <input
          type="text"
          placeholder="Apply promo code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />
        <button
          type="button"
          onClick={handleApplyCoupon}
          className="fw-bold promo-apply-trigger-btn"
        >
          Apply
        </button>
      </div>

  
      <div className="total-price-row">
        <div className="total-heading-block">
          <div className="total-title">Total Rental Price</div>
          <div className="total-desc">Overall price and includes rental tax</div>
        </div>
        <div className="total-val">${total.toFixed(2)}</div>
      </div>
      
    </div>
  );
};

export default RentalSummary;