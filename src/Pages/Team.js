import MotionHoc from "./MotionHoc";
import "../Pages/Home.css"
import React from 'react'
import ImageCSB from '../assets/csb-logo.png'
import ImageKylo from '../assets/kylo-logo.jpg'
import ImageWirin from '../assets/wirin-logo.png'


const ContainerExampleFluid = () => (
  <div className="main-div" style={{ marginTop: "50px" }}>
    <u><h2 className="main-header">Experience</h2></u>
    <div className="mdc-card mdc-card--outlined" style={{ marginTop: "50px" }}>
      <div className="mdc-card__primary-action">
        <div className="mdc-card__title mdc-card__title--large temp">
          <h4 className="mdc-card__title-text main-heading-2">
            <u className="u-main">Wipro IISc Research and Innovation Network (WIRIN)</u>
          </h4>
          <div className="img-div">
            <img src={ImageWirin} alt="WIRIN Logo"/>
            <span>
              <br />
              • <u>Role:</u><span className="span-exp"> Software Development and ML Intern</span><br />
              • <u>From:</u><span className="span-exp"> September 2021 </span>to<span className="span-exp"> February 2022</span><br />
              <br />
              <p className="para">
                • Worked on the development of Control Systems for Autonomous Vehicle. <br />
                • Developed a Virtual Simulator to simulate car controls using the keyboard. <br />
                • Developed ML-powered software tool to generate collision-free Optical Flow Path for Autonomous Vehicles using OpenCV.<br />
                • Tools & Softwares used: Python, OpenCV, Tensorflow, Visual Studio Code, Image Processing
              </p>
            </span>
          </div>

        </div>
      </div>
    </div>
    <div className="mdc-card mdc-card--outlined" style={{ marginTop: "50px" }}>
      <div className="mdc-card__primary-action">
        <div className="mdc-card__title mdc-card__title--large temp">
          <h4 className="mdc-card__title-text main-heading-2">
            <u>Kylo Apps</u>
          </h4>
          <div className="img-div">
            <img src={ImageKylo} alt="Kylo Apps Logo"/>
            <span>
              <br />
              • <u>Role:</u><span className="span-exp"> React Developer Intern</span><br />
              • <u>From:</u><span className="span-exp"> February 2022 </span>to<span className="span-exp"> March 2022</span><br />
              <br />
              <p>
                • Worked on the development of UI components for React Applications. <br />
                •  Built reusable UI components for multiple Web Applications and
                worked on the re-building and functional modifications of existing Applications. <br />
                • Contributed to 8 projects for the entire internship duration.<br />
                • Tools & Softwares used: HTML, CSS, JavaScript, ReactJS, Bootstrap-React, Visual Studio Code
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="mdc-card mdc-card--outlined" style={{ marginTop: "50px" }}>
      <div className="mdc-card__primary-action">
        <div className="mdc-card__title mdc-card__title--large temp">
          <h4 className="mdc-card__title-text main-heading-2">
            <u>Chai Sutta Bar Ltd</u>
          </h4>
          <div className="img-div">
            <img src={ImageCSB} alt="Chai Sutta Bar Logo"/>
            <span>
              <br />
              • <u>Role:</u><span className="span-exp"> Web Development Intern</span><br />
              • <u>From:</u><span className="span-exp"> July 2021 </span>to<span className="span-exp"> September 2021</span><br />
              <br />
              <p>
                • Worked on the UI improvement of existing website of Chai Sutta Bar Ltd. <br />
                • Developed career form on the website. <br />
                • Created wordpress plugins for the website.<br />
                • Tools & Softwares used: HTML, CSS, JavaScript, WordPress, Visual Studio Code.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="mdc-card mdc-card--outlined" style={{ marginTop: "50px" }}>
      <div className="mdc-card__primary-action">
        {/* <div className="img-div">
          <img src="https://ssl.gstatic.com/images/icons/gplus-128.png" alt="Google+"/><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non libero id augue vestibulum tempus. Maecenas ornare tincidunt porta.</span>
        </div> */}
      </div>
    </div>
    <br /><br />
  </div>

)

const Home = MotionHoc(ContainerExampleFluid);

export default Home;
