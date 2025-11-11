import React from "react";

// type Props = {
//   params: Promise<{ slug: string }>;
// };

// ✅ Sharja Trading Dell-focused service data
const serviceData: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    video: string;
  }
> = {
  "it-infrastructure-solutions": {
    title: "IT Infrastructure Solutions",
    subtitle: "Delivering Reliable Dell Servers and Networking Solutions",
    description:
      "We deliver reliable Dell servers, storage, and networking solutions to help businesses build strong, scalable IT foundations across Ethiopia.",
    image: "/assets/images/sharja/service/service-1.jpg",
    video: "https://www.youtube.com",
  },
  "marketing-branding": {
    title: "Marketing & Branding",
    subtitle: "Enhancing Brand Presence and Trust",
    description:
      "We enhance Sharja Trading’s presence as Ethiopia’s trusted Dell partner through strategic branding and digital marketing that highlight innovation, reliability, and value.",
    image: "/assets/images/sharja/service/service-2.jpg",
    video: "https://www.youtube.com",
  },
  "sales-consulting": {
    title: "Sales Consulting",
    subtitle: "Guiding Smarter IT Investment Decisions",
    description:
      "We guide businesses to choose the right Dell products and IT solutions that maximize performance, reduce costs, and drive sustainable growth.",
    image: "/assets/images/sharja/service/service-3.jpg",
    video: "https://www.youtube.com/",
  },
  "financial-consulting": {
    title: "Financial Consulting",
    subtitle: "Maximizing Value Through Smart IT Investment",
    description:
      "Providing expert financial insights to help businesses invest wisely in Dell technologies and achieve long-term value through cost-efficient IT solutions.",
    image: "/assets/images/sharja/service/service-4.jpg",
    video: "https://www.youtube.com",
  },
  "human-resources": {
    title: "Human Resources",
    subtitle: "Empowering Teams with Training and Technology",
    description:
      "We empower teams with training, tools, and technology to enhance productivity and service excellence across Sharja Trading’s Dell-focused operations.",
    image: "/assets/images/sharja/service/service-5.jpg",
    video: "https://www.youtube.com",
  },
  "market-research": {
    title: "Market Research",
    subtitle: "Driving Innovation Through Insights",
    description:
      "We analyze technology trends and customer needs to help Sharja Trading stay ahead in delivering the most relevant Dell products and IT solutions in Ethiopia.",
    image: "/assets/images/sharja/service/service-4.jpg",
    video: "https://www.youtube.com/",
  },
};

const ServiceDetail = async ({ slug }: { slug: string }) => {
  // ✅ Unwrap the params promise (required for Next.js App Router)
  console.log(slug);

  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="text-center py-20">
        <h2>Service Not Found</h2>
        <p>We couldn’t find details for “{slug}”.</p>
      </div>
    );
  }

  return (
    <section className="services-details pt-120 pb-120">
      <div className="container">
        <div className="row align-items-lg-center mb-5">
          <div className="col-lg-6">
            <div className="sec-title mb-40">
              <h6
                className="sub-title wow fadeInUp bg-transparent ps-0"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                {service.subtitle}
              </h6>
              <h2 className="title mb-30 wow splt-txt" data-splitting>
                {service.title}
              </h2>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="project-details__top mt-lg-5">
              <div className="text mb-40">{service.description}</div>
            </div>
          </div>
        </div>

        {/* Image + Video Section */}
        <div className="row">
          <div className="col-lg-12">
            <div className="services-details__content position-relative my-5">
              <img src={service.image} alt={service.title} />
              <div className="btn-wrp d-flex align-items-center">
                <a
                  className="video-btn playbtnanim popup-video wow fadeInLeft"
                  data-wow-delay="700ms"
                  data-wow-duration="1500ms"
                  href={service.video}
                  data-fancybox="gallery"
                >
                  <i className="fa-sharp fa-solid fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar + More Info */}
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content">
              <h3>Description</h3>
              <p className="mb-30">{service.description}</p>

              <h3 className="mb-5">Service Process</h3>
              <ul className="list-disc ps-4">
                <li>Creative Analysis & Research</li>
                <li>Strategy & Planning</li>
                <li>Execution & Monitoring</li>
                <li>Delivery & Optimization</li>
              </ul>

              <h3 className="mt-5 mb-4">Service Outcome</h3>
              <ul className="outcome-list mb-5">
                <li>
                  <i className="fal fa-check"></i> Improved business efficiency
                </li>
                <li>
                  <i className="fal fa-check"></i> Scalable Dell infrastructure
                  solutions
                </li>
                <li>
                  <i className="fal fa-check"></i> Strategic IT investments
                </li>
                <li>
                  <i className="fal fa-check"></i> Enhanced team productivity
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="service-sidebar mt-5 mt-lg-0">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list mb-30">
                  <h4 className="title">More Services</h4>
                  <ul>
                    {Object.keys(serviceData).map((key) => (
                      <li key={key}>
                        <a href={`/services/${key}`}>
                          <i className="far fa-arrow-right"></i>
                          <span>{serviceData[key].title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sidebar-service-list mb-30">
                  <h4 className="title">Contact With Us</h4>
                  <ul className="address">
                    <li>Addis Ababa, Ethiopia</li>
                    <li>
                      <a href="mailto:info@sharjatrading.com">
                        management@sharjatrading.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+251942439999">+251 942 43 9999</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
