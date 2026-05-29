import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { loginUser, clearAuthError } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import { loadWishlist } from "../redux/slices/carSlice";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadWishlist());
      toast.success("Welcome back to MORENT!");
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from, dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAuthError());
    }
  }, [error, dispatch]);

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="auth-split-wrapper">
      <div className="auth-left-panel d-none d-lg-flex">
        <div className="logo-area">MORENT</div>
        <div className="auth-banner-content">
          <h1>Easy way to rent a car at low price</h1>
          <p>
            Choose from thousands of luxury, sports, and family cars. Fully
            insured, clean vehicles, and 24/7 customer support.
          </p>
        </div>
        <div className="auth-footer">
          &copy; 2026 MORENT. All rights reserved.
        </div>
      </div>

      {/* Right panel - Form Module */}
      <div className="auth-right-panel">
        <div className="auth-form-card">
          <h2>Sign In</h2>
          <p className="auth-subtitle">
            Don't have an account? <Link to="/register">Create one here</Link>
          </p>

          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <Form.Group className="auth-validation-group" controlId="formBasicEmail">
              <Form.Label className="fw-semibold text-dark">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                isInvalid={!!errors.email}
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <div className="auth-error-feedback">{errors.email.message}</div>
              )}
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="auth-validation-group" controlId="formBasicPassword">
              <Form.Label className="fw-semibold text-dark">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                isInvalid={!!errors.password}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <div className="auth-error-feedback">{errors.password.message}</div>
              )}
            </Form.Group>

            {/* Remember & Forgot Password */}
            <div className="d-flex justify-content-between align-items-center mb-4 pt-1">
              <Form.Check
                type="checkbox"
                id="remember-me"
                label="Remember me"
                className="fw-semibold text-secondary checkbox-accent-tint"
              />
              <Link
                to="#"
                className="text-primary fw-semibold text-decoration-none forgot-password-trigger"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-100 py-3 fw-bold rounded-3 border-0 action-submit-auth-btn"
            >
              Sign In
            </Button>
          </Form>

        </div>
      </div>
    </div>
  );
};

export default Login;