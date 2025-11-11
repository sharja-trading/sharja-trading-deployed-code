import React from "react";

type Props = {};

const AboutGrowthSection = (props: Props) => {
  return (
    <div>
      <section
        className="growth-section pt-120 pb-120"
        data-background="./assets/images/bg/growth-bg.jpg"
      >
        <div className="container">
          <div className="sec-title pb-50 mb-50">
            <h6
              className="sub-title wow fadeInUp"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              Growth Rate
            </h6>
            <div className="flex-content">
              <h2 className="title text-white wow splt-txt" data-splitting>
                Delivering Genuine Dell Products <br /> and Innovative IT
                Solutions.
              </h2>
              <a
                className="btn-one-light border-0 rounded-0 wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
                href="/services"
              >
                Discover More
              </a>
            </div>
          </div>
          <div className="row g-5">
            <div
              className="col-xl-4 wow fadeInLeft"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <div className="growth-block">
                {/* <!-- pie-graph --> */}
                <div className="pie-graph">
                  <div className="graph-outer">
                    <input
                      type="text"
                      className="dial"
                      data-fgcolor="#C6D936"
                      data-bgcolor="#fff"
                      data-width="120"
                      data-height="120"
                      data-linecap="normal"
                      defaultValue="90"
                    />
                    <div className="inner-text count-box">
                      <span
                        className="count-text"
                        data-stop="90"
                        data-speed="2000"
                      ></span>
                      %
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <h4 className="title">Scalable Dell Solutions</h4>
                  <p className="text">
                    Delivering genuine Dell products and scalable IT solutions
                    tailored for your business growth.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="growth-block">
                {/* <!-- pie-graph --> */}
                <div className="pie-graph">
                  <div className="graph-outer">
                    <input
                      type="text"
                      className="dial"
                      data-fgcolor="#C6D936"
                      data-bgcolor="#fff"
                      data-width="120"
                      data-height="120"
                      data-linecap="normal"
                      defaultValue="95"
                    />
                    <div className="inner-text count-box">
                      <span
                        className="count-text"
                        data-stop="95"
                        data-speed="2000"
                      ></span>
                      %
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <h4 className="title">Authorized Dell Solutions</h4>
                  <p className="text">
                    Providing genuine Dell products and reliable IT solutions
                    for businesses in Ethiopia.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 wow fadeInLeft"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="growth-block">
                {/* <!-- pie-graph --> */}
                <div className="pie-graph">
                  <div className="graph-outer">
                    <input
                      type="text"
                      className="dial"
                      data-fgcolor="#C6D936"
                      data-bgcolor="#fff"
                      data-width="120"
                      data-height="120"
                      data-linecap="normal"
                      defaultValue="75"
                    />
                    <div className="inner-text count-box">
                      <span
                        className="count-text"
                        data-stop="75"
                        data-speed="2000"
                      ></span>
                      %
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <h4 className="title">24/7 IT Support</h4>
                  <p className="text">
                    Reliable support for your Dell systems and IT solutions
                    anytime, anywhere in Ethiopia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutGrowthSection;
