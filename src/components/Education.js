import React from "react";
import ProfilePic from "./../assets/lahari-photography.jpg";

function Education() {
  return (
    <div className="education-container-main wrapper">
      <div className="education-container-center-main">
        <h3 className="heading">Education</h3>
        <hr className="underline"></hr>
        <div className="listof-education-containers">
          <div className="education-container">
            <div className="big-image-container">
              <img
                src="https://i.ytimg.com/vi/Hu-QKEgfezM/maxresdefault.jpg"
                alt="college"
              />
              <div className="round-percentage">
                <h1>80.5%</h1>
              </div>
            </div>
            <div className="education-container-center">
              <div className="image-container">
                <img src={ProfilePic} alt="" className="profile" />
              </div>
              <div className="clg-name">
                <h3>
                  Rajiv Gandhi University Of Knowledge And
                  Techologies-SRIKAKULAM
                </h3>
                <p>2019-2023</p>
              </div>
              <div className="percentage-container">
                <button className="percentage-btn">percentage: 8.0</button>
              </div>
              <div className="stream-container">
                <h3>computer science and engineering</h3>
              </div>
              <div className="state-container">
                <p>srikakulam, andhra pradesh, india</p>
              </div>
            </div>
          </div>

          <div className="education-container">
            <div className="big-image-container">
              <img
                src="http://www.rguktrkv.ac.in/images/rkvlogo.png"
                alt="college"
              />
              <div className="round-percentage">
                <h1>70.1%</h1>
              </div>
            </div>
            <div className="education-container-center">
              <div className="image-container">
                <img src={ProfilePic} alt="" className="profile" />
              </div>
              <div className="clg-name">
                <h3>
                  Rajiv Gandhi University Of Knowledge And
                  Techologies-SRIKAKULAM
                </h3>
                <p>2017-2019</p>
              </div>
              <div className="percentage-container">
                <button className="percentage-btn">percentage: 7.1</button>
              </div>
              <div className="stream-container">
                <h3>intermediate</h3>
              </div>
              <div className="state-container">
                <p>srikakulam, andhra pradesh, india</p>
              </div>
            </div>
          </div>

          <div className="education-container">
            <div className="big-image-container">
              <img
                src="https://i.ytimg.com/vi/LqM3f52c0VE/maxresdefault.jpg"
                alt="college"
              />
              <div className="round-percentage">
                <h1>98%</h1>
              </div>
            </div>
            <div className="education-container-center">
              <div className="image-container">
                <img src={ProfilePic} alt="" className="profile" />
              </div>
              <div className="clg-name">
                <h3>Z.P.H school</h3>
                <p>2011-2017</p>
              </div>
              <div className="percentage-container">
                <button className="percentage-btn">percentage: 9.8</button>
              </div>
              <div className="stream-container">
                <h3>SSC, high school</h3>
              </div>
              <div className="state-container">
                <p>komaragiri, andhra pradesh, india</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
