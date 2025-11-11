import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
        <section className="about-section-three pt-120 pb-120">
      <div className="container">
        <div className="row g-5 g-xxl-0">
          <div className="col-xl-6 image-column">
            <div className="inner-column">
              <div className="shape">
                <img className="animation__rotate" src="./assets/images/about/about-three-info.png" alt="Image"/>
              </div>
              <figure className="image">
                <img src="./assets/images/sharja/sharja-img-2.jpg" alt="Image"/>
              </figure>
              <p className="text mt-30 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">Today’s businesses increasingly rely on trusted IT partners to power their digital growth. At Sharja Trading PLC, we provide genuine Dell Computers and tailored IT solutions, helping organizations make informed technology choices and stay ahead in a competitive market.</p>
              <div className="info mt-50 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                <a className="btn-one-rounded" href="/about">more about <i className="fa-regular fa-arrow-up-right"></i></a>
                <div className="user">
                  <ul>
                    <li><img src="./assets/images/about/about-two-user1.png" alt="Image"/></li>
                    <li><img src="./assets/images/about/about-two-user2.png" alt="Image"/></li>
                    <li><img src="./assets/images/about/about-two-user3.png" alt="Image"/></li>
                    <li><img src="./assets/images/about/about-two-user4.png" alt="Image"/></li>
                  </ul>
                  <h6 className="title">10M+ Impact Across the World. <img src="./assets/images/about/about-two-line.png" alt="Image"/></h6>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 content-column">
            <div className="inner-column">
              <div className="sec-title">
                <h6 className="sub-title wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">ABOUT US</h6>
                <h2 className="title wow splt-txt" data-splitting>
  We provide innovative IT solutions to grow your business with 
  <span className="font-weight-300">Dell Computers</span> and 
  <span className="font-weight-300">authorized expertise</span>
</h2>
              </div>
              <div className="about-block-three mt-50">
  <div className="row g-0">
    <div className="col-sm-6 wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">
      <div className="content-box">
        <div className="count-box"><span className="count-text" data-stop="5" data-speed="2000"></span>+</div>
        <p className="text">Years of trusted IT solutions</p>
      </div>
    </div>
    <div className="col-sm-6 wow fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">
      <div className="content-box margin-minus">
        <div className="count-box"><span className="count-text" data-stop="100" data-speed="2000"></span>+</div>
        <p className="text">Businesses powered with Dell</p>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About