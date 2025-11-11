import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div>
            <section className="banner-section-three">
      <div className="container">
        <div className="row g-0 align-items-end">
          <div className="col-xl-8 content-column">
            <div className="inner-column">
              <h1 className="title wow splt-txt" data-splitting><span className="font-weight-400 d-block">Authorized Partner for</span> DELL IT Solutions</h1>
              <p className="text wow fadeInLeft" data-wow-delay="00ms" data-wow-duration="1500ms">Sharja Trading PLC is the trusted destination for IT solutions, delivering genuine Dell Computers and cutting-edge technology as one of the few authorized Dell partners in the country. </p>
              <div className="btn-wrp">
                <a className="btn-one-rounded wow fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms" href="/contact">Get started <i className="fa-regular fa-angle-right"></i></a>
                <a href="https://www.youtube.com/watch?v=Lplq8RjQ0zU" data-fancybox="gallery" data-caption="" className="video-btn wow fadeInLeft playbtnanim" data-wow-delay="400ms" data-wow-duration="1500ms"><i className="fa-sharp fa-solid fa-play"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-image tm-gsap-img-parallax"><img src="./assets/images/sharja/sharja-img-1.jpg" alt="Image"/></div>
        <div className="arry"><img className="animation__arryLeftRight" src="./assets/images/shape/banner-arry.png" alt="Image"/></div>
      </div>
    </section>
    </div>
  )
}

export default Hero