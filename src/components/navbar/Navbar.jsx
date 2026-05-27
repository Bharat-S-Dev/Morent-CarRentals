import React , { useState } from "react";
import { Container, Navbar as MainNavbar, Nav, Form, InputGroup, Dropdown,} from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setSearchQuery } from "../../redux/slices/carSlice";
import { logoutUser } from "../../redux/slices/authSlice";

import { toast } from "react-toastify";

import Logo from "../../assets/logo/Logo.png";
import Heart from "../../assets/icon/Like.png";
import Bell from "../../assets/icon/Notification.png";
import Settings from "../../assets/icon/Settings.png";
import SearchIcon from "../../assets/icon/search-normal.png";
import Filter from "../../assets/icon/filter.png";
import WishlistOffcanvas from "./WishlistOffcanvas";
import NotificationPopover from "./NotificationPopover";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showWishlist, setShowWishlist] = useState(false);
  const handleCloseWishlist = () => setShowWishlist(false);
  const handleShowWishlist = () => setShowWishlist(true);

  const searchQuery = useSelector((state) => state.car.searchQuery);
  const wishlist = useSelector((state) => 
    state.auth.isAuthenticated ? state.car.wishlist : []
  );

  const { user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleSearchChange = (e) => {
    const query = e.target.value;

    dispatch(setSearchQuery(query));

    if (window.location.pathname !== "/category") {
      navigate("/category");
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("Successfully logged out!");
    navigate("/");
  };

  return (
    <MainNavbar
      expand="lg"
      className="navbar-wrapper"
      sticky="top"
    >
      <Container>
       
        <div className="d-lg-none w-100">

          <div className="mobile-topbar d-flex justify-content-between align-items-center">
            <MainNavbar.Toggle aria-controls="navbar-content" />

            {isAuthenticated ? (
              <Dropdown align="end">

                <Dropdown.Toggle
                  variant="link"
                  className="p-0 border-0 shadow-none"
                >
                  <img
                    src="https://i.pravatar.cc/44?img=12"
                    alt="profile"
                    className="profile-img rounded-circle"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="border-0 shadow mt-2">
                  <Dropdown.Header>Hi, {user?.name}</Dropdown.Header>
                  <Dropdown.Item onClick={() => navigate("/dashboard")}>
                    My Bookings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="text-danger" onClick={handleLogout}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link
                to="/login"
                className="text-decoration-none"
              >
                Sign In
              </Link>
            )}

          </div>

          <div className="mobile-logo">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="img-fluid logo-img"
              />
            </Link>
          </div>

          {/* Search */}
          <div className="mobile-search-wrapper">

            <Form
              className="search-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <InputGroup className="search-bar">
                <InputGroup.Text>
                  <img
                    src={SearchIcon}
                    alt="search"
                    width="20"
                    height="20"
                  />
                </InputGroup.Text>

                <Form.Control
                  type="text"
                  placeholder="Search something here"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />

              </InputGroup>
            </Form>

            <button
              className="filter-btn-mobile"
              onClick={() => navigate("/category")}
            >
              <img
                src={Filter}
                alt="filter"
                width="20"
                height="20"
              />
            </button>

          </div>
          <MainNavbar.Collapse id="navbar-content" className="mt-3">
            <div className="d-flex align-items-center justify-content-center gap-4 py-3 bg-white border rounded-3 shadow-sm">
              
              <div className="position-relative" style={{ cursor: "pointer" }} onClick={handleShowWishlist}>
                <img src={Heart} alt="heart" style={{ width: "44px", height: "44px" }} />
                {wishlist.length > 0 && (
                  <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{ top: "4px", right: "-4px", fontSize: "10px" }}>
                    {wishlist.length}
                  </span>
                )}
              </div>

              <NotificationPopover>
                <img src={Bell} alt="bell" style={{ width: "44px", height: "44px", cursor: "pointer" }} />
              </NotificationPopover>

              <img src={Settings} alt="settings" style={{ width: "44px", height: "44px", cursor: "pointer" }} />

            </div>
          </MainNavbar.Collapse>
        </div>

        <div className="d-none d-lg-flex w-100 align-items-center">
          <MainNavbar.Brand
            as={Link}
            to="/"
            className="me-4"
          >
            <img
              src={Logo}
              alt="logo"
              className="img-fluid logo-img"
            />
          </MainNavbar.Brand>

          <Form
            className="search-form mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <InputGroup className="search-bar">

              <InputGroup.Text>
                <img
                  src={SearchIcon}
                  alt="search"
                  width="20"
                  height="20"
                />
              </InputGroup.Text>

              <Form.Control
                type="text"
                placeholder="Search something here"
                value={searchQuery}
                onChange={handleSearchChange}
              />

              <InputGroup.Text
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/category")}
              >
                <img
                  src={Filter}
                  alt="filter"
                  width="20"
                  height="20"
                />
              </InputGroup.Text>

            </InputGroup>
          </Form>

          {/* Right Icons */}
          <Nav className="align-items-center gap-3">
            <div
              className="position-relative"
              onClick={handleShowWishlist}
            >
              <img
                src={Heart}
                alt="heart"
                className="nav-icon"
              />


              {wishlist.length > 0 && (
                <span
                  className="position-absolute translate-middle badge rounded-pill bg-danger"
                  style={{
                    top: "8px",
                    right: "-4px",
                    fontSize: "10px",
                  }}
                >
                  {wishlist.length}
                </span>
              )}
            </div>

            {/* Bell */}
            <NotificationPopover>
              <img
                src={Bell}
                alt="bell"
                className="nav-icon"
              />
            </NotificationPopover>

            {/* Settings */}
            <img
              src={Settings}
              alt="settings"
              className="nav-icon"
            />

            {/* Profile */}
            {isAuthenticated ? (
              <Dropdown align="end">

                <Dropdown.Toggle
                  variant="link"
                  className="p-0 border-0 shadow-none"
                >
                  <img
                    src="https://i.pravatar.cc/44?img=12"
                    alt="profile"
                    className="profile-img rounded-circle"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="border-0 shadow mt-2">

                  <Dropdown.Header>
                    Hi, {user.name}
                  </Dropdown.Header>

                  <Dropdown.Item
                    onClick={() => navigate("/dashboard")}
                  >
                    My Bookings
                  </Dropdown.Item>

                  <Dropdown.Divider />

                  <Dropdown.Item
                    className="text-danger"
                    onClick={handleLogout}
                  >
                    Sign Out
                  </Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <Link
                to="/login"
                className="text-decoration-none"
              >
                Sign In
              </Link>
            )}

          </Nav>
        </div>

      </Container>
      <WishlistOffcanvas show={showWishlist} onHide={handleCloseWishlist} />
    </MainNavbar>
  );
};

export default Navbar;