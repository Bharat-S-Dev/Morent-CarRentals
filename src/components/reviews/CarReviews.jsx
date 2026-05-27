import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addReview } from "../../redux/slices/carSlice";
import { useNavigate } from "react-router-dom"; 

const CarReviews = ({ carId, reviews = [] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const currentUser = useSelector((state) => state.auth.user);
  const [formRating, setFormRating] = useState(5);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: currentUser ? currentUser.name : "",
      userTitle: "",
      content: "",
    },
  });

  const handleReviewSubmit = (data) => {
    const formattedDate = new Date().toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const newReview = {
      id: "rev_" + Math.random().toString(36).substr(2, 9),
      userName: data.userName,
      userTitle: data.userTitle || "Renter",
      userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
      date: formattedDate,
      rating: formRating,
      content: data.content,
    };

    dispatch(addReview({ carId, review: newReview }));
    toast.success("Thank you for your review!");
    reset({
      userName: currentUser ? currentUser.name : "",
      userTitle: "",
      content: "",
    });
    setFormRating(5);
  };

  return (
    <div className="reviews-card mt-4">
      <div className="reviews-title-bar d-flex align-items-center gap-2 mb-4">
        <h3>Reviews</h3>
        <span className="reviews-badge">{reviews.length}</span>
      </div>

      {reviews.length > 0 ? (
        <div className="reviews-list d-flex flex-column gap-4">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-item-block">
              <img src={rev.userAvatar} alt={rev.userName} className="review-user-avatar" />
              
              <div className="review-content-master-box">
                <div className="review-responsive-header d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
                  <div className="user-meta-info-block">
                    <h5 className="user-name">{rev.userName}</h5>
                    <p className="user-title">{rev.userTitle}</p>
                  </div>
                  
                  <div className="review-rating-date-block text-start text-sm-end mt-1 mt-sm-0">
                    <span className="date-label-text">{rev.date}</span>
                    <div className="stars-row-tint">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < rev.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                      )}
                    </div>
                  </div>
                </div>
                <p className="review-text-content mt-2 mb-0">{rev.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-secondary my-4 text-center">No reviews yet. Be the first one!</p>
      )}

      {isAuthenticated ? (
        <div className="add-review-box mt-4">
          <h4 className="mb-3">Leave a Review</h4>
          <Form onSubmit={handleSubmit(handleReviewSubmit)}>
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="fw-semibold text-secondary">Your Rating:</span>
              <div className="star-select-row d-flex gap-1 m-0">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    onClick={() => setFormRating(i + 1)}
                    className={i < formRating ? "filled" : ""}
                  >
                    <FaStar />
                  </span>
                ))}
              </div>
            </div>

            <Row className="g-3">
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold text-secondary mb-1">Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    className="py-2 px-3 input-field-reset"
                    placeholder="Enter your name"
                    {...register("userName", { required: "Name is required" })}
                  />
                  {errors.userName && <span className="validation-error">{errors.userName.message}</span>}
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold text-secondary mb-1">Professional Title</Form.Label>
                  <Form.Control
                    type="text"
                    className="py-2 px-3 input-field-reset"
                    placeholder="e.g. CEO at Corporate"
                    {...register("userTitle")}
                  />
                </Form.Group>
              </Col>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label className="fw-semibold text-secondary mb-1">Review Content</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="py-2 px-3 input-field-reset"
                    placeholder="Describe your rental experience here..."
                    {...register("content", {
                      required: "Content cannot be empty",
                      minLength: { value: 10, message: "Minimum 10 characters required" },
                    })}
                  />
                  {errors.content && <span className="validation-error">{errors.content.message}</span>}
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit" className="px-4 py-2 mt-3 border-0 rent-now-btn">
              Submit Review
            </Button>
          </Form>
        </div>
      ) : (
        <div className="p-4 rounded-3 text-center border bg-light my-4">
          <p className="text-secondary m-0 mb-3 small">
            Please sign in to leave a review.
          </p>
          <Button 
            className="px-4 py-2 border-0 rent-now-btn" 
            onClick={() => navigate("/login")}
          >
            Sign In to Leave a Review
          </Button>
        </div>
      )}
    </div>
  );
};

export default CarReviews;