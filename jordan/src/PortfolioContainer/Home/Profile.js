import React from "react";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M <span className="highlihghted-text">Jordan</span>
            </span>
          </div>
          <div className="profile-detils-role">
              <span className="primary-text">
                  {""}
                  <h1>
                    <Typical
                    loop={Infinity}
                    steps={[
                        "Wed designer",
                        1000,
                        "Front End Dev",
                        1000,
                        "UI/UX Design",
                        1000,
                        "Graphic Designer",
                        1000,
                        "Professinal Photographer",
                        1000,
                    ]}
                    />
                  </h1>
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}
