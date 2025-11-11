import React from 'react'

type Props = {}

const Breadcrumb = ({name}: any) => {
  return (
    <div>
      <section
        className="page-title"
        style={{ backgroundImage: "url('./assets/images/bg/page-title-bg.jpg')" }}
      >
        <div className="auto-container">
          <div className="title-outer">
            <ul className="page-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>{name}</li>
            </ul>
            <h1 className="title">{name}</h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Breadcrumb