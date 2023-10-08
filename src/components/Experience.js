import React from "react";

function Experience() {
  return (
    <div className="experience-container wrapper">
      <div className="title">
        <h3 className="heading">Experience</h3>
        <hr className="underline"></hr>
      </div>
      <div className="experience-container-center-exp">
        <div className="leftside-container">
          <button className="exp-btn">Draftss</button>
        </div>
        <div className="rightside-container">
          <h1 className="exp-role">Application Developer</h1>
          <button className="exp-company">Draftss</button>
          <p className="date">August 2023-Present</p>
          <div className="exp-points">
            <div className="each-point">
              <div className="dot"></div>
              <p>
                Involved in developing HTML, JavaScript and React for client
                side presentation and data validation on the client side within
                the forms.
              </p>
            </div>

            <div className="each-point">
              <div className="dot"></div>
              <p>Used CSS3 styling for responsive design of web pages.</p>
            </div>

            <div className="each-point">
              <div className="dot"></div>
              <p>Worked on browsers like Firefox and Google chrome.</p>
            </div>

            <div className="each-point">
              <div className="dot"></div>
              <p>Created reusable css classes for common styles.</p>
            </div>

            <div className="each-point">
              <div className="dot"></div>
              <p>Developed small level websites using Html, CSS, Javascript.</p>
            </div>

            <div className="each-point">
              <div className="dot"></div>
              <p>
                Design, develop and test HTML, CSS3, JavaScript and React.JS
                that meets accessibility and web browser standards for website.
              </p>
            </div>
            <div className="each-point">
              <div className="dot"></div>
              <p>
                Designed CSS templates for use in all pages on the website
                working with CSS Background, positioning, text, border, margin,
                and padding.
              </p>
            </div>
            <div className="each-point">
              <div className="dot"></div>

              <p>
                Used React-Router to turn an application into a Single Page
                Application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
