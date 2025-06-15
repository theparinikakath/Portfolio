import React from "react";
import jiitLogo from "/src/assets/jiit.png";
import mayo from "/src/assets/mayo.png";
import hass from "/src/assets/hass.png";

const educationData = [
  {
    date: "Sep 2022 - July 2026",
    title: "BTech, Computer Science",
    institute: "Jaypee Institute of Information Technology",
    details: [
      "CourseWorks: Data Structures and Algorithms",
      "Operating Systems, DBMS, Computer Networks",
    ],
    logo: jiitLogo,
  },
  {
    date: "Jul 2020 - May 2022",
    title: "Senior Secondary (CBSE)",
    institute: "Mayo International School, Delhi",
    details: ["Score in XII: 83%", "PCM + English + Informatics Practices"],
    logo: mayo,
  },
  {
    date: "Mar 2008 - Mar 2020",
    title: "Secondary (ICSE)",
    institute: "Holy Angels Sr. Sec. School",
    details: [
      "Score in X: 97.2%",
      "Editorial board, Badminton club, Math club",
    ],
    logo: hass,
  },
];

export default function Education() {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Education Timeline</h2>
      <div className="position-relative">
        {/* Center line */}
        <div
          className="position-absolute top-0 start-50 translate-middle-x"
          style={{
            width: "4px",
            height: "100%",
            backgroundColor: "currentColor",
            opacity: 0.25,
            zIndex: 1,
          }}
        ></div>

        {educationData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              className="row g-0 mb-5 position-relative"
              key={index}
              style={{ paddingTop: "40px", minHeight: "140px" }}
            >
              {/* Date */}
              <div
                className={`col-md-5 d-flex ${
                  isLeft ? "justify-content-end" : "justify-content-start order-md-2"
                } align-items-center`}
              >
                <p
                  className="mb-0 fw-semibold"
                  style={{
                    color: "currentColor",
                    opacity: 0.8,
                    textAlign: isLeft ? "right" : "left",
                    marginLeft: index === 1 ? "30px" : "0px",
                  }}
                >
                  {item.date}
                </p>
              </div>

              {/* Center icon for large screens */}
              <div
                className="d-none d-md-flex position-absolute start-50 translate-middle-x align-items-center justify-content-center bg-body rounded-circle border"
                style={{
                  top: "10%",
                  width: "60px",
                  height: "60px",
                  borderColor: "currentColor",
                  zIndex: 2,
                }}
              >
                <img
                  src={item.logo}
                  alt="institution-logo"
                  style={{ width: "30px", height: "30px", objectFit: "contain" }}
                />
              </div>

              {/* Card */}
              <div
                className={`col-md-6 ${isLeft ? "offset-md-1" : "order-md-1"}`}
              >
                <div className="card border-0 shadow bg-light-subtle dark:bg-dark-subtle ms-md-3 me-md-3">
                  <div className="card-body">
                    {/* Top logo for small screens */}
                    <div className="d-md-none text-center mb-3">
                      <img
                        src={item.logo}
                        alt="institution-logo"
                        style={{ width: "40px", height: "40px", objectFit: "contain" }}
                      />
                    </div>

                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {item.institute}
                    </h6>
                    <ul className="mb-0">
                      {item.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
