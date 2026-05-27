import React from "react";
import { Offcanvas, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleWishlist } from "../../redux/slices/carSlice";
import { toast } from "react-toastify";
import { MdOutlineCancel } from "react-icons/md";


const WishlistOffcanvas = ({ show, onHide }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const { isAuthenticated } = useSelector((state) => state.auth);
  const { wishlist: rawWishlist, cars } = useSelector((state) => state.car);

  const wishlist = isAuthenticated ? rawWishlist : [];
  const wishlistedCars = cars.filter((car) => wishlist.includes(car.id));

  const handleRemove = (id, name, e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(id));
    toast.error(`${name} removed from wishlist`);
  };
  


  return (
    <Offcanvas 
      show={show} 
      onHide={onHide} 
      placement="end" 
      className="wishlist-drawer border-0"
    >
      <Offcanvas.Header closeButton className="border-bottom p-4 bg-light">
        <Offcanvas.Title className="fw-bold text-dark d-flex align-items-center gap-2 fs-5">
          <span>My Wishlist</span>
          <Badge bg="primary" pill className="badge-blue px-2 py-1">
            {wishlistedCars.length}
          </Badge>
        </Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body className="p-4">
        {wishlistedCars.length === 0 ? (
          <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center text-muted gap-2 opacity-75">
            <span className="display-4">❤️</span>
            <h5 className="fw-bold m-0 text-dark">Your wishlist is empty</h5>
            <p className="m-0 px-3 small">Tap the heart icon on cars to save them here.</p>
          </div>
        ) : (
          <div className="d-flex flex-column gap-3">
            {wishlistedCars.map((item) => (
              <div 
                key={item.id} 
                className="p-3 border rounded-3 bg-white d-flex align-items-center justify-content-between wishlist-item-card cursor-pointer"
                onClick={() => { onHide(); navigate(`/car/${item.id}`); }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-light p-2 rounded-2 d-flex align-items-center justify-content-center wishlist-img-container">
                    <img src={item.image} alt={item.name} className="img-fluid h-100 object-fit-contain" />
                  </div>
                  <div>
                    <h6 className="m-0 fw-bold text-dark text-truncate mini-card-title">{item.name}</h6>
                    <small className="text-secondary d-block small-text">{item.type}</small>
                    <span className="fw-bold text-blue tracking-tight">
                      ${item.price.toFixed(2)}/<span className="text-secondary fw-normal small-text">day</span>
                    </span>
                  </div>
                </div>

                <div className="d-flex flex-column align-items-end gap-2" onClick={(e) => e.stopPropagation()}>
                  <button 
                    className="btn p-0 text-secondary border-0 remove-btn fs-5" 
                    onClick={(e) => handleRemove(item.id, item.name, e)}
                  >
                    <MdOutlineCancel />
                  </button>
                  <button 
                    className="btn btn-primary btn-sm px-3 rent-btn-sm"
                    onClick={() => { onHide(); navigate(`/payment/${item.id}`); }}
                  >
                    Rent
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default WishlistOffcanvas;