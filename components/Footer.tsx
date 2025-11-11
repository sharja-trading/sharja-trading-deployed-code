import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <footer className="main-footer footer-style-three pt-100">
        <div className="container">
          <div className="footer-cta">
            <div className="sec-title">
              <h2 className="title wow splt-txt" data-splitting>
                Looking For Professional IT Solutions Partner?
              </h2>
              <p
                className="text wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                Sharja Trading PLC offers expert IT solutions, providing Dell
                systems and services to help your business operate efficiently
                and stay ahead in technology.
              </p>
            </div>

            <div
              className="btn-wrp wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <a href="/contact" className="cta-btn">
                Get Started Free{" "}
                <i className="fa-regular fa-arrow-up-right"></i>
              </a>
              {/* <!-- <p className="text">No credit card required</p> --> */}
            </div>
            <div className="bg-shape">
              <img src="/assets/images/shape/cta-line.png" alt="Image" />
            </div>
            <div className="arry">
              <img
                className="animation__arryLeftRight"
                src="/assets/images/shape/cta-arry.png"
                alt="Image"
              />
            </div>
          </div>
          <div className="widgets-section">
            <div className="row g-5 g-xl-0">
              <div className="col-lg-4 footer-column">
                <div className="footer-widget about-widget">
                  <div className="logo">
                    <a href="index.html">
                      <img
                        src="/assets/images/sharja/sharjah-logo-removebg-preview.png"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div className="widget-content">
                    <p className="text">
                      Sharja Trading PLC delivers top-quality Dell computers and
                      IT solutions, ensuring your business runs smoothly and
                      stays ahead in technology.
                    </p>
                    {/* <div className="input-feild">
                    <input type="text" placeholder="Email Address">
                    <button><i className="fa-regular fa-arrow-up-right"></i></button>
                  </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-4 g-xl-0">
                  <div className="col-sm-6 col-xl-3 footer-column">
                    <div className="footer-widget links-widget">
                      <h4 className="widget-title">Quick Link</h4>
                      <div className="widget-content">
                        <ul className="user-links">
                          <li>
                            <a href="/home">Home</a>
                          </li>
                          <li>
                            <a href="/services">Services</a>
                          </li>
                          <li>
                            <a href="/about">About Us</a>
                          </li>
                          <li>
                            <a href="/blog">News</a>
                          </li>
                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3 footer-column">
                    <div className="footer-widget links-widget">
                      <h4 className="widget-title">Our Services</h4>
                      <div className="widget-content">
                        <ul className="user-links">
                          <li>
                            <a href="/services">IT Infrastructure</a>
                          </li>
                          <li>
                            <a href="/services">Dell Hardware Supply</a>
                          </li>
                          <li>
                            <a href="/services">Maintenance & Support</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-3 footer-column">
                    <div className="footer-widget links-widget contact-widget">
                      <h4 className="widget-title">Contact</h4>
                      <div className="widget-content">
                        <ul className="user-links">
                          <li>
                            <i className="fa-light fa-location-dot"></i>
                            <a href="#0">
                              Kidus Michael Building, Addis Ababa, Ethiopia
                            </a>
                          </li>
                          <li>
                            <i className="fa-light fa-envelope"></i>
                            <a href="https://html.kodesolution.com/cdn-cgi/l/email-protection#b1c2c4c1c1dec3c5f1d6dcd0d8dd9fd2dedc">
                              <span
                                className="__cf_email__"
                                data-cfemail="f1828481819e8385b1969c90989ddf929e9c"
                              >
                                management@sharjatrading.com
                              </span>
                            </a>
                          </li>
                          <li>
                            <i className="fa-light fa-phone-flip"></i>
                            <a href="tel:+0001234455">+251 942 43 9999</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="copyright-text">
              Copyright ©2025, <a href="#0">Design</a> All Rights Reserved
            </p>
            <ul className="footer-nav font-semibold text-white">
              <li>
                <span>
                  Developed by{" "}
                  <a
                    href="https://www.habeshatechnologies.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-blue-400 transition-colors duration-200"
                  >
                    Habesha Technologies
                  </a>
                </span>
              </li>
            </ul>

            <button className="goTop-btn">
              <i className="fa-solid fa-angles-up"></i>{" "}
              <i className="fa-solid fa-angles-up"></i>
            </button>
          </div>
        </div>
        <div className="sec-shape">
          <img
            className="animation__rotateY"
            src="/assets/images/shape/dual-circle420.png"
            alt="Image"
          />
        </div>
        <div className="box-shape">
          <div
            className="box1 wow slideInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          ></div>
          <div
            className="box2 wow slideInLeft"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          ></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer