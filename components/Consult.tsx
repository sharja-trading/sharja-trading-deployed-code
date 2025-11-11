import React from "react";

type Props = {};

const Consult = (props: Props) => {
  return (
    <section
      className="consult-section pt-120 pb-120"
      data-background="images/bg/consult-bg.jpg"
    >
      <div className="sec-shape">
        <img
          className="animation__rotate"
          src="./assets/images/shape/consult-shape.png"
          alt="Image"
        />
      </div>
      <div className="container">
        <div className="sec-title center">
          <h6
            className="sub-title wow fadeInUp"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            IT Solutions
          </h6>

          {/* ✅ Fixed attribute here */}
          <h2 className="title text-white wow splt-txt" data-splitting>
            Powering the Future of Business with Dell Technology
          </h2>

          <div className="btn-wrp mt-30">
            <a
              className="btn-two-rounded wow fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
              href="/about"
            >
              Discover More <i className="fa-regular fa-arrow-up-right"></i>
            </a>
            <a
              className="btn-one-rounded wow fadeInUp"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
              href="/contact"
            >
              Contact Us <i className="fa-regular fa-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consult;
