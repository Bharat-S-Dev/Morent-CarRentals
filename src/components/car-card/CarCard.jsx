import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../redux/slices/carSlice";
import { toast } from "react-toastify";

import GasIcon from "../../assets/icon/GasIcon.png";
import Wheel from "../../assets/icon/Wheel.png";
import Users from "../../assets/icon/Users.png";
import Heart from "../../assets/icon/heart.png";
import LikedRed from "../../assets/icon/LikedRed.png";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.car.wishlist);
  const isLiked = wishlist.includes(car.id);

  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleWishlist(car.id));
    
    if (isLiked) {
      toast.error(`${car.name} removed from wishlist`);
    } else {
      toast.success(`${car.name} added to wishlist`);
    }
  };

  const handleRentNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/payment/${car.id}`);
  };

  return (
    <div className="custom-car-card">
      <div className="card-title-area">
        <div>
          <Link to={`/car/${car.id}`}>
            <h3>{car.name}</h3>
          </Link>
          <div className="card-type">{car.type}</div>
        </div>
        <button
          className={`heart-btn ${isLiked ? "liked" : ""}`}
          onClick={handleWishlistToggle}
          title={isLiked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <img
            src={isLiked ? LikedRed : Heart}
            alt="like"
            width="24"
            height="24"
          />
        </button>
      </div>

      <div
        className="card-img-area cursor-pointer"
        onClick={() => navigate(`/car/${car.id}`)}
      >
        <img src={car.image} alt={car.name} className="img-fluid" />
        <div className="card-fade-overlay"></div>
      </div>

      <div className="card-specs">
        <div className="spec-item" title="Fuel Capacity">
          <img src={GasIcon} alt="gas" />
          <span>{car.fuel}</span>
        </div>
        <div className="spec-item" title="Transmission">
          <img src={Wheel} alt="transmission" />
          <span>{car.transmission}</span>
        </div>
        <div className="spec-item" title="People Capacity">
          <img src={Users} alt="capacity" />
          <span>{car.capacity} People</span>
        </div>
      </div>

      <div className="card-pricing-action">
        <div>
          <div className="price-value">
            ${car.price.toFixed(2)}/<span>day</span>
          </div>
          {car.originalPrice && (
            <span className="original-price">
              ${car.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button className="rent-btn" onClick={handleRentNow}>
          Rent Now
        </button>
      </div>
    </div>
  );
};

export default CarCard;
