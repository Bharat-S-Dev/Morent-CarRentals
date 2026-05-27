import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FiGrid, FiBarChart2, FiDollarSign, FiMessageSquare, FiCalendar, FiSettings, FiHelpCircle, FiLogOut, FiAlertCircle } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { logoutUser } from "../redux/slices/authSlice";
import NissanGTRImage from "../assets/cars/Car (2).png";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar-menu">
        <div className="sidebar-section">
          <div className="sidebar-section-title">Main Menu</div>
          <ul className="sidebar-menu-list mb-4">
            <li><a href="#" className="menu-item-link active"><FiGrid /> <span>Dashboard</span></a></li>
            <li><a href="#" className="menu-item-link" onClick={() => navigate("/category")}><FaCar /> <span>Car Rent</span></a></li>
            <li><a href="#" className="menu-item-link"><FiBarChart2 /> <span>Insight</span></a></li>
            <li><a href="#" className="menu-item-link"><FiDollarSign /> <span>Reimburse</span></a></li>
            <li><a href="#" className="menu-item-link"><FiMessageSquare /> <span>Inbox</span></a></li>
            <li><a href="#" className="menu-item-link"><FiCalendar /> <span>Calender</span></a></li>
          </ul>
          <div className="sidebar-section-title">Preferences</div>
          <ul className="sidebar-menu-list">
            <li><a href="#" className="menu-item-link"><FiSettings /> <span>Settings</span></a></li>
            <li><a href="#" className="menu-item-link"><FiHelpCircle /> <span>Help & Center</span></a></li>
          </ul>
        </div>
        <div className="sidebar-menu-list mt-5">
          <a href="#" className="menu-item-link text-danger" onClick={() => { dispatch(logoutUser()); navigate("/"); }}><FiLogOut /> <span>Log Out</span></a>
        </div>
      </aside>


      <Container fluid className="p-0">
        <div className="p-3 mt-4 rounded-3 bg-light border border-primary d-flex align-items-center gap-2 justify-content-center text-center">
          <FiAlertCircle className="text-primary fs-5" />
          <h6 className="fw-bold m-0 small text-dark">Dashboard is under Construction !</h6>
        </div>
      </Container>
    </div>

  );
};

export default Dashboard;
