import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { addBooking } from "../redux/slices/rentalSlice";

import BillingInfo from "../components/payment/BillingInfo";
import RentalInfo from "../components/payment/RentalInfo";
import PaymentMethod from "../components/payment/PaymentMethod";
import Confirmation from "../components/payment/Confirmation";
import RentalSummary from "../components/payment/RentalSummary";

const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cars = useSelector((state) => state.car.cars);
  const currentUser = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const car = cars.find((c) => c.id === id);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.warning("Please sign in to rent a car.");
      navigate("/login", {
        state: { from: { pathname: `/payment/${id}` } },
      });
    }
  }, [isAuthenticated, navigate, id]);

  if (!car) {
    return (
      <Container className="py-5 text-center empty-state-container">
        <h3 className="fw-bold text-dark">Car Not Found</h3>
        <p className="text-secondary">Please go back and select a valid car.</p>
        <Button onClick={() => navigate("/")} className="border-0 px-4 py-2 custom-back-btn">
          Back Home
        </Button>
      </Container>
    );
  }

  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: currentUser ? currentUser.name : "",
      phone: "",
      address: "",
      city: "",
      pickLocation: "",
      pickDate: "",
      pickTime: "",
      dropLocation: "",
      dropDate: "",
      dropTime: "",
      cardNumber: "",
      cardExpiry: "",
      cardHolder: currentUser ? currentUser.name : "",
      cardCvv: "",
      marketingAgree: false,
      termsAgree: false,
    },
  });

  const watchedCardNum = watch("cardNumber");
  const watchedCardHolder = watch("cardHolder");
  const watchedCardExpiry = watch("cardExpiry");
  const pickDateValue = watch("pickDate");
  const dropDateValue = watch("dropDate");

  let rentalDays = 1;
  if (pickDateValue && dropDateValue) {
    const start = new Date(pickDateValue);
    const end = new Date(dropDateValue);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    rentalDays = diffDays > 0 ? diffDays : 1;
  }

  const subtotal = car.price * rentalDays;
  const tax = subtotal * 0.1;
  const discountAmount = subtotal * (discountPercent / 100);
  const total = subtotal + tax - discountAmount;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === "MORENT10") {
      setDiscountPercent(10);
      toast.success("Coupon code MORENT10 applied! 10% Discount active.");
    } else {
      toast.error("Invalid coupon code. Try 'MORENT10'");
    }
  };

  const onSubmit = (data) => {
    if (!data.termsAgree) {
      toast.error("You must agree to our terms and conditions.");
      return;
    }

    const bookingPayload = {
      carId: car.id,
      carName: car.name,
      carImage: car.image,
      billingDetails: {
        name: data.name,
        phone: data.phone,
        address: data.address,
        city: data.city,
      },
      rentalDetails: {
        pickLocation: data.pickLocation,
        pickDate: data.pickDate,
        pickTime: data.pickTime,
        dropLocation: data.dropLocation,
        dropDate: data.dropDate,
        dropTime: data.dropTime,
      },
      paymentDetails: {
        method: paymentMethod,
        cardDetails: paymentMethod === "credit-card" ? {
          number: data.cardNumber.slice(-4),
          holder: data.cardHolder,
        } : null,
      },
      pricing: {
        days: rentalDays,
        subtotal,
        tax,
        discount: discountAmount,
        total,
      },
    };

    dispatch(addBooking(bookingPayload));
    toast.success("Booking success! Your car is ready to pickup.");
    navigate("/");
  };

  return (
    <div className="payment-page-wrapper pb-5">
      <Container fluid="lg" className="pt-4 pt-md-5 px-3 px-md-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="g-4">
            
            <Col xs={12} lg={8} className="order-2 order-lg-1 d-flex flex-column gap-4">
              <BillingInfo register={register} errors={errors} />
              <RentalInfo register={register} errors={errors} watch={watch} />
              <PaymentMethod
                register={register}
                errors={errors}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                watchedCardNum={watchedCardNum}
                watchedCardHolder={watchedCardHolder}
                watchedCardExpiry={watchedCardExpiry}
                currentUser={currentUser}
              />
              <Confirmation register={register} errors={errors} />
            </Col>

            <Col xs={12} lg={4} className="order-1 order-lg-2">
              <div className="sticky-summary-sidebar">
                <RentalSummary
                  car={car}
                  rentalDays={rentalDays}
                  subtotal={subtotal}
                  tax={tax}
                  discountAmount={discountAmount}
                  discountPercent={discountPercent}
                  total={total}
                  couponCode={couponCode}
                  setCouponCode={setCouponCode}
                  handleApplyCoupon={handleApplyCoupon}
                />
              </div>
            </Col>

          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default Payment;