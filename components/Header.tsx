"use client";
import React, { useState, useEffect } from "react";

type Props = {};

const Header = (props: Props) => {
  // 1. State to manage the visibility of the mobile menu (often controlled by a class on the body or menu element)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 2. Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 3. Effect to handle screen size changes (optional, often better handled by pure CSS media queries, but useful for React-controlled elements)
  useEffect(() => {
    const handleResize = () => {
      // Close the mobile menu automatically if the screen size becomes desktop size (e.g., > 992px for standard frameworks)
      if (window.innerWidth >= 992 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobileMenuOpen]);

  // The CSS class "mobile-menu" usually needs an active class (e.g., "active" or "visible") to show it.
  // We'll simulate this by applying a class to the mobile-menu div.
  const mobileMenuClass = isMobileMenuOpen
    ? "mobile-menu active"
    : "mobile-menu";
  // You might also need to toggle a class on the body/html element, which would require an additional useEffect or logic.

  return (
    <>
      <header className="main-header header-style-three">
        {/* */}
        <div className="header-top">
          <div className="auto-container">
            <div className="top-left">
              {/* */}
              <ul className="info-list">
                <li>
                  <span className="fa-regular fa-clock"></span> Open Hours. (Mon
                  - Fri: <span>8.00</span> am -<span>6.00</span> pm)
                </li>
              </ul>
            </div>

            <div className="top-right">
              <ul className="top-social-icon">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* */}

        {/* --- */}

        {/* */}
        <div className="main-box">
          <div className="logo-box">
            <div className="logo">
              <a href="/">
                <img
                  src="/assets/images/sharja/sharjah-logo-removebg-preview.png"
                  alt=""
                  title="Sharja Trading"
                />
              </a>
            </div>
          </div>
          {/* */}
          <div className="nav-outer">
            <nav className="nav main-menu">
              {/* The "d-block d-lg-none" class in your original code seems to be on the mobile menu list, but here we keep the primary nav for desktop */}
              <ul className="navigation">
                <li className="">
                  <a href="/">Home</a>
                </li>
                <li className="">
                  <a href="/about">About</a>
                </li>
                <li className="">
                  <a href="/services">Services</a>
                </li>
                <li className="">
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
            {/* */}
          </div>
          <div className="outer-box">
            <div className="info-box">
              <div className="call-info">
                <i className="fa-solid fa-phone ring__animation"></i>
                <div>
                  <h6 className="title">Phone:</h6>
                  <a href="tel:00190000000">+251 942 43 9999</a>
                </div>
              </div>
              <a className="con-btn" href="/contact">
                Get an Quote <i className="fa-regular fa-angle-right"></i>
              </a>
            </div>
            {/* */}
            {/* The onClick handler is added here to toggle the mobile menu */}
            <div
              className="mobile-nav-toggler d-block d-lg-none"
              onClick={toggleMobileMenu}
            >
              <i className="icon lnr-icon-bars"></i>
            </div>
          </div>
        </div>

        {/* --- */}

        <div className="auto-container">
          {/* */}
          {/* The class name is now dynamic based on React state */}
          <div className={mobileMenuClass}>
            <div className="menu-backdrop" onClick={toggleMobileMenu}></div>
            {/* */}
            <nav className="menu-box">
              <div className="upper-box">
                <div className="nav-logo">
                  <a href="/">
                    <img
                      src="/assets/images/sharja/sharjah-logo-removebg-preview.png"
                      alt=""
                    />
                  </a>
                </div>
                {/* Close button with onClick handler */}
                <div className="close-btn" onClick={toggleMobileMenu}>
                  <i className="icon fa fa-times"></i>
                </div>
              </div>
              {/* This is where the navigation for mobile should be rendered. 
                  It's typically populated by JavaScript, or you can use a separate
                  navigation component here, or simply copy the main navigation structure.
              */}
              <ul className="navigation clearfix">
                {/* **NOTE**: In a real-world scenario, you would dynamically copy the desktop `ul.navigation` 
                 content here in a React-friendly way, but for now, we keep the placeholder structure. */}
              </ul>

              <div className="content-box">
                {" "}
                {/* Removed d-none d-lg-block to ensure content shows in mobile menu */}
                <h4 className="title">About Us</h4>
                <p className="text">
                  Sharja Trading PLC is the trusted destination for IT
                  solutions, delivering genuine Dell Computers{" "}
                </p>
              </div>
              <ul className="contact-list-one">
                {/* ... contact details ... */}
                <li>
                  <div className="contact-info-box">
                    <i className="icon lnr-icon-phone-handset"></i>
                    <span className="title">Call Now</span>
                    <a href="tel:+251942439999">+251 942 43 9999</a>
                  </div>
                </li>
                <li>
                  <div className="contact-info-box">
                    <span className="icon lnr-icon-envelope1"></span>
                    <span className="title">Send Email</span>
                    <a href="mailto:management@sharjatrading.com">
                      management@sharjatrading.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="contact-info-box">
                    <span className="icon lnr-icon-clock"></span>
                    <span className="title">Working Hours</span>
                    Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                  </div>
                </li>
              </ul>
              <ul className="social-links">
                {/* ... social links ... */}
                <li>
                  <a href="#">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
          {/* */}

          {/* --- */}

          {/* */}
          <div className="sticky-header">
            <div className="auto-container">
              <div className="inner-container">
                {/* */}
                <div className="logo">
                  <a href="/">
                    <img
                      src="/assets/images/sharja/sharjah-logo-removebg-preview.png"
                      alt=""
                    />
                  </a>
                </div>
                {/* */}
                <div className="nav-outer">
                  {/* <!-- Main Menu --> */}
                  <nav className="main-menu">
                    <div className="navbar-collapse clearfix">
                      <ul className="navigation clearfix">
                        {/* <!--Keep This Empty / Menu will come through Javascript--> */}
                      </ul>
                    </div>
                  </nav>
                  {/* <!--Mobile Navigation Toggler--> */}
                  <div className="mobile-nav-toggler">
                    <span className="icon lnr-icon-bars"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* */}
        </div>
      </header>
    </>
  );
};

export default Header;
