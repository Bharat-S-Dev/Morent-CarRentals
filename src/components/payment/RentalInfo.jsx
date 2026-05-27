// import React from "react";
// import { Row, Col, Form } from "react-bootstrap";

// const RentalInfo = ({
//   register,
//   errors,
//   pickDateValue,
// }) => {
//   return (
//     <div className="checkout-card">
//       <div className="checkout-header">
//         <div className="header-left">
//           <h3>Rental Info</h3>
//           <p>Please select your rental date</p>
//         </div>

//         <div className="step-indicator">
//           Step 2 of 4
//         </div>
//       </div>

//       {/* PICKUP */}
//       <div className="form-group-title mb-4">
//         <div className="dot"></div>
//         Pick - Up
//       </div>

//       <Row className="g-3 mb-4">

//         {/* Pick Location */}
//         <Col md={6}>
//           <Form.Group>

//             <Form.Label className="fw-semibold text-secondary mb-2">
//               Locations
//             </Form.Label>

//             <Form.Select
//               className="py-3 px-3 bg-light border-0 shadow-none rounded-3"
//               {...register("pickLocation", {
//                 required: "Pick-up location is required",
//               })}
//             >
//               <option value="">Select your city</option>
//               <option value="New York">New York</option>
//               <option value="London">London</option>
//               <option value="Paris">Paris</option>
//               <option value="Tokyo">Tokyo</option>

//             </Form.Select>

//             {errors?.pickLocation && (
//               <span className="validation-error">
//                 {errors.pickLocation.message}
//               </span>
//             )}

//           </Form.Group>
//         </Col>

//         {/* Pick Date */}
//         <Col md={6}>
//           <Form.Group>
//             <Form.Label className="fw-semibold text-secondary mb-2">
//               Date
//             </Form.Label>

//             <Form.Control
//               type="date"
//               className="py-3 px-3 bg-light border-0 shadow-none rounded-3"
//               {...register("pickDate", {
//                 required: "Pick-up date is required",

//                 validate: (value) => {
//                   const today = new Date()
//                     .toISOString()
//                     .split("T")[0];

//                   return (
//                     value >= today ||
//                     "Pickup date cannot be in the past"
//                   );
//                 },
//               })}
//             />

//             {errors?.pickDate && (
//               <span className="validation-error">
//                 {errors.pickDate.message}
//               </span>
//             )}

//           </Form.Group>
//         </Col>

//         {/* Pick Time */}
//         <Col md={6}>
//           <Form.Group>
//             <Form.Label className="fw-semibold text-secondary mb-2">
//               Time
//             </Form.Label>
//             <Form.Control
//               type="time"
//               className="py-3 px-3 bg-light border-0 shadow-none rounded-3"
//               {...register("pickTime", {
//                 required: "Pick-up time is required",
//               })}
//             />

//             {errors?.pickTime && (
//               <span className="validation-error">
//                 {errors.pickTime.message}
//               </span>
//             )}

//           </Form.Group>
//         </Col>

//       </Row>

//       {/* DROPOFF */}
//       <div className="form-group-title mb-4">

//         <div
//           className="dot"
//           style={{ backgroundColor: "#54A6FF" }}
//         ></div>

//         Drop - Off

//       </div>

//       <Row className="g-3">

//         {/* Drop Location */}
//         <Col md={6}>
//           <Form.Group>

//             <Form.Label className="fw-semibold text-secondary mb-2">
//               Locations
//             </Form.Label>

//             <Form.Select
//               className="py-3 px-3 bg-light border-0 shadow-none rounded-3"
//               {...register("dropLocation", {
//                 required: "Drop-off location is required",
//               })}
//             >
//               <option value="">Select your city</option>

//               <option value="New York">New York</option>
//               <option value="London">London</option>
//               <option value="Paris">Paris</option>
//               <option value="Tokyo">Tokyo</option>

//             </Form.Select>

//             {errors?.dropLocation && (
//               <span className="validation-error">
//                 {errors.dropLocation.message}
//               </span>
//             )}

//           </Form.Group>
//         </Col>

//         {/* Drop Date */}
//         <Col md={6}>
//           <Form.Group>

//             <Form.Label className="fw-semibold text-secondary mb-2">
//               Date
//             </Form.Label>

//             <Form.Control
//               type="date"
//               className="py-3 px-3 bg-light border-0 shadow-none rounded-3"
//               {...register("dropDate", {
//                 required: "Drop-off date is required",

//                 validate: (value) => {
//                   if (!pickDateValue) return true;

//                   return (
//                     new Date(value) > new Date(pickDateValue) ||
//                     "Drop date must be after pickup date"
//                   );
//                 },
//               })}
//             />

//             {errors?.dropDate && (
//               <span className="validation-error">
//                 {errors.dropDate.message}
//               </span>
//             )}

//           </Form.Group>
//         </Col>

//         {/* Drop Time */}
//         <Col md={6}>
//           <Form.Group>

//             <Form.Label className="fw-semibold text-secondary mb-2">
//               Time
//             </Form.Label>

//             <Form.Control
//               type="time"
//               className="py-3 px-3 bg-light border-0 shadow-none rounded-3"
//               {...register("dropTime", {
//                 required: "Drop-off time is required",
//               })}
//             />

//             {errors?.dropTime && (
//               <span className="validation-error">
//                 {errors.dropTime.message}
//               </span>
//             )}

//           </Form.Group>
//         </Col>

//       </Row>
//     </div>
//   );
// };

// export default RentalInfo;




import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const RentalInfo = ({ register, errors, watch }) => {
  const watchedPickDate = watch("pickDate");
  
  // Aaj ki date string formatting (YYYY-MM-DD format for input attribute restrictions)
  const getTodayString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  const todayDate = getTodayString();

  return (
    <div className="checkout-card">
      <div className="checkout-header">
        <div className="header-left">
          <h3>Rental Info</h3>
          <p>Please select your rental date</p>
        </div>
        <div className="step-indicator">Step 2 of 4</div>
      </div>

      {/* ==================== PICK-UP SECTION ==================== */}
      <div className="form-group-title mb-4">
        <div className="dot"></div>
        <span>Pick - Up</span>
      </div>

      <Row className="g-4 mb-5">
        <Col xs={12} md={6}>
          <Form.Group className="validation-field-group">
            <Form.Label>Locations</Form.Label>
            <Form.Select
              isInvalid={!!errors?.pickLocation}
              {...register("pickLocation", { required: "Pick-up location is required" })}
            >
              <option value="">Select your city</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Paris">Paris</option>
              <option value="Tokyo">Tokyo</option>
            </Form.Select>
            {errors?.pickLocation && <div className="custom-error-msg">{errors.pickLocation.message}</div>}
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group className="validation-field-group">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              min={todayDate} // This natively locks and disables past dates in the calendar picker!
              isInvalid={!!errors?.pickDate}
              {...register("pickDate", {
                required: "Pick-up date is required",
                validate: (value) => value >= todayDate || "Past dates booking not allowed"
              })}
            />
            {errors?.pickDate && <div className="custom-error-msg">{errors.pickDate.message}</div>}
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group className="validation-field-group">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              isInvalid={!!errors?.pickTime}
              {...register("pickTime", { required: "Pick-up time is required" })}
            />
            {errors?.pickTime && <div className="custom-error-msg">{errors.pickTime.message}</div>}
          </Form.Group>
        </Col>
      </Row>

      <div className="form-group-title dropoff-title-indicator mb-4">
        <div className="dot"></div>
        <span>Drop - Off</span>
      </div>

      <Row className="g-4">
        <Col xs={12} md={6}>
          <Form.Group className="validation-field-group">
            <Form.Label>Locations</Form.Label>
            <Form.Select
              isInvalid={!!errors?.dropLocation}
              {...register("dropLocation", { required: "Drop-off location is required" })}
            >
              <option value="">Select your city</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Paris">Paris</option>
              <option value="Tokyo">Tokyo</option>
            </Form.Select>
            {errors?.dropLocation && <div className="custom-error-msg">{errors.dropLocation.message}</div>}
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group className="validation-field-group">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              min={watchedPickDate || todayDate} 
              isInvalid={!!errors?.dropDate}
              {...register("dropDate", {
                required: "Drop-off date is required",
                validate: (value) => {
                  if (!watchedPickDate) return true;
                  return value >= watchedPickDate || "Drop date must be on or after pickup date";
                }
              })}
            />
            {errors?.dropDate && <div className="custom-error-msg">{errors.dropDate.message}</div>}
          </Form.Group>
        </Col>

        <Col xs={12} md={6}>
          <Form.Group className="validation-field-group">
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              isInvalid={!!errors?.dropTime}
              {...register("dropTime", { required: "Drop-off time is required" })}
            />
            {errors?.dropTime && <div className="custom-error-msg">{errors.dropTime.message}</div>}
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default RentalInfo;