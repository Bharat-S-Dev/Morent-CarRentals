import React from "react";
import { Dropdown } from "react-bootstrap";

const NotificationPopover = ({ children }) => {
  return (
    <Dropdown align="end" className="d-inline">
      
      <Dropdown.Toggle as="div" bsPrefix="no-caret" className="cursor-pointer">
        {children}
      </Dropdown.Toggle>

      <Dropdown.Menu className="shadow border-0 m-0 p-0 notification-dropdown">
        
        {/* Header Block Row */}
        <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-light rounded-top-3">
          <h6 className="m-0 fw-bold text-dark fs-6-custom">Notifications</h6>
          <span className="text-primary fw-semibold fs-7-custom cursor-pointer">
            Mark all read
          </span>
        </div>
        
        <div className="overflow-auto notification-scroll-body">
          
          <div className="p-3 border-bottom d-flex gap-2 align-items-start unread-notification-item">
            <span className="fs-5">🚗</span>
            <div>
              <p className="m-0 text-dark fw-semibold lh-sm fs-6-custom">
                Your car booking #BK-9281 has been confirmed successfully!
              </p>
              <small className="text-secondary fs-7-custom">Just now</small>
            </div>
          </div>

          <div className="p-3 border-bottom d-flex gap-2 align-items-start">
            <span className="fs-5">⚡</span>
            <div>
              <p className="m-0 text-dark lh-sm fs-6-custom">
                New high-speed Sport model Koenigsegg is now available.
              </p>
              <small className="text-secondary fs-7-custom">3 hours ago</small>
            </div>
          </div>

        </div>


        <div className="p-2 text-center border-top">
          <small className="text-primary fw-bold cursor-pointer fs-6-custom">
            See all activities
          </small>
        </div>

      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationPopover;