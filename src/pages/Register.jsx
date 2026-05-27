import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, clearAuthError } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, registeredUsers } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  const passwordValue = watch("password");

  const onSubmit = (data) => {
    const userExists = registeredUsers.some((u) => u.email === data.email);
    if (userExists) {
      toast.error("User with this email already exists.");
      return;
    }

    dispatch(
      registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      })
    );
    toast.success("Registration successful! Please sign in.");
    navigate("/login");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAuthError());
    }
  }, [error, dispatch]);

  return (
    <div className="auth-split-wrapper">
      
      <div className="auth-left-panel d-none d-lg-flex">
        <div className="logo-area">MORENT</div>
        <div className="auth-banner-content">
          <h1>Easy way to rent a car at low price</h1>
          <p>
            Join us today to rent vehicles of your choice. Safe pickup, verified
            documents, and no hidden costs.
          </p>
        </div>
        <div className="auth-footer">
          &copy; 2026 MORENT. All rights reserved.
        </div>
      </div>

      <div className="auth-right-panel">
        <div className="auth-form-card">
          <h2>Sign Up</h2>
          <p className="auth-subtitle">
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>

          <Form onSubmit={handleSubmit(onSubmit)}>
            

            <Form.Group className="auth-validation-group" controlId="formBasicName">
              <Form.Label className="fw-semibold text-dark">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                isInvalid={!!errors.name}
                {...register("name", {
                  required: "Full Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z\s]+$/,
                    message: "Name can only contain letters and spaces",
                  }
                })}
              />
              {errors.name && (
                <div className="auth-error-feedback">{errors.name.message}</div>
              )}
            </Form.Group>


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


            <Form.Group className="auth-validation-group" controlId="formBasicPassword">
              <Form.Label className="fw-semibold text-dark">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create a password"
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


            <Form.Group className="auth-validation-group" controlId="formConfirmPassword">
              <Form.Label className="fw-semibold text-dark">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                isInvalid={!!errors.confirmPassword}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (val) => {
                    if (val !== passwordValue) {
                      return "Passwords do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <div className="auth-error-feedback">{errors.confirmPassword.message}</div>
              )}
            </Form.Group>

            {/* Submit Action Button */}
            <Button
              type="submit"
              className="w-100 py-3 fw-bold rounded-3 border-0 action-submit-auth-btn mt-3"
            >
              Sign Up
            </Button>
          </Form>

        </div>
      </div>
    </div>
  );
};

export default Register;