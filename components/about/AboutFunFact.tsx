import React from 'react'

type Props = {}

const AboutFunFact = (props: Props) => {
  return (
    <div>
      <section className="funfact-section-four">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-xl-4">
              <div className="sec-title">
                <h2 className="title wow splt-txt" data-splitting>
                  We Help Businesses <br />
                  Achieve More with Genuine Dell Solutions
                </h2>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row g-4">
                <div className="col-sm-4">
                  <div className="funfact-block-four border-0">
                    <img
                      src="./assets/images/shape/funface-four-shape.png"
                      alt="Image"
                    />
                    <h2 className="title">90%</h2>
                    <h5 className="sub-title">Clients Satisfactions</h5>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="funfact-block-four">
                    <img
                      src="./assets/images/shape/funface-four-shape.png"
                      alt="Image"
                    />
                    <h2 className="title">40%</h2>
                    <h5 className="sub-title">
                      Reduced IT Costs with Genuine Dell Products
                    </h5>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="funfact-block-four">
                    <img
                      src="./assets/images/shape/funface-four-shape.png"
                      alt="Image"
                    />
                    <h2 className="title">7M</h2>
                    <h5 className="sub-title">
                      Trusted Dell Users in Ethiopia
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutFunFact