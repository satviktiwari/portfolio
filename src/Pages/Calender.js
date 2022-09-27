import MotionHoc from "./MotionHoc";
import "../Pages/Home.css"
import React from 'react'
import cctv from '../assets/cctv.png'
import sag from '../assets/sag.png'
import covid from '../assets/covid-detection-tool.png'
import susmafia from '../assets/sus-mafia.png'
import { Image } from 'semantic-ui-react'

const ContainerExampleFluid = () => (
  <div className="main-div" style={{ marginTop: "50px" }}>
    <u><h2 className="main-header">Projects</h2></u>
    <br />
    <p>Here are some of the projects that I have developed to learn and enhance my technical skills. Majority of my projects are from the domain of Web Development. Few projects have applied Maachine Learning along with Software Development.</p>
    <div className="mdc-card mdc-card--outlined" style={{ marginTop: "50px"}}>
      <div className="mdc-card__primary-action">
        <div className="mdc-card__title mdc-card__title--large temp">
          <h4 className="mdc-card__title-text main-heading-2">
            <u className="u-main">Framework for CCTV Storage Optimization</u>
          </h4>
          <div className="img-div">

            <span className="ber">
              {/* <img src={cctv} alt="WIRIN Logo" className="image-proj" /> */}
              <Image src={cctv} size='medium' rounded className="image-proj"/>
              <br />
              • <u>Domain:</u><span className="span-exp"> Image Processing, Computer Vision, Machine Learning, Web Development, Database Management</span><br />
              • <u>From:</u><span className="span-exp"> March 2022 </span>to<span className="span-exp"> July 2022</span><br />
              <br />
              <p className="para">
                • This is the Minor Project developed by me under the guidance of Dr. Sahana B, Asst. Prof. at RVCE. <br />
                • I developed a computer program and a website to optimize the storage space of CCTV cameras using the YOLO-v5 algorithm and OpenCV library. <br />
                • It optimizes the storage space by removing the redundant CCTV footage frames having Euclidean distance lesser than a threshold value.<br />
                • The algorithm efficiently reduces the storage space of the recordings to about one-fourth of the existing space without any compromise on the quality of the recordings. However, this accuracy remians subjected to the input CCTV recording.
              </p>
              • <u>Tech Stack:</u><span className="span-exp"> HTML, CSS, JavaScript, Python, Firebase, OpenCV</span><br />
              • <u>GitHub Repository Link:</u><span className="span-exp"> <a href="https://github.com/satviktiwari/CCTV-Storage-Optimization" target="_blank"> Click Here</a></span><br />
              • <u>Website Link:</u><span className="span-exp"> <a href="https://cctvprocessing.netlify.app/" target="_blank"> Click Here</a> </span><br />
              <br />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="mdc-card mdc-card--outlined" style={{ marginTop: "50px"}}>
      <div className="mdc-card__primary-action">
        <div className="mdc-card__title mdc-card__title--large temp">
          <h4 className="mdc-card__title-text main-heading-2">
            <u className="u-main">Sag Measurement & Circle Fitting Application</u>
          </h4>
          <div className="img-div">
            
            <span className="ber">
            <img src={sag} alt="WIRIN Logo" className="image-proj"/>
              <br />
              • <u>Domain:</u><span className="span-exp"> Image Processing, Computer Vision, Machine Learning, Mathematical Modeling</span><br />
              • <u>From:</u><span className="span-exp"> September 2021 </span>to<span className="span-exp"> October 2021</span><br />
              <br />
              <p className="para">
                • I programmed an algebraic circle fitting algorithm (Taubin Fit Algorithm) for the sag measurement in pipes and fuel rods using image analysis of diffracted laser beams.  <br />
                • Used ImageJ software for image processing, C++ & Python to program the algorithm.<br />
                • Developed program for sag measurement with respect to the slope of coordinates of the laser beam and the output screen.
              </p>
              • <u>Tech Stack:</u><span className="span-exp"> C++, Python, MATLAB, ImageJ, OpenCV</span><br />
              • <u>GitHub Repository Link:</u><span className="span-exp"> <a href="https://github.com/satviktiwari/Circle-Fitting-and-Sag-Measurement" target="_blank"> Click Here</a></span><br />
              <br />
            </span>
          </div>

        </div>
      </div>
    </div>
    <div className="mdc-card mdc-card--outlined" style={{ marginTop: "50px"}}>
      <div className="mdc-card__primary-action">
        <div className="mdc-card__title mdc-card__title--large temp">
          <h4 className="mdc-card__title-text main-heading-2">
            <u className="u-main">COVID DETECTION TOOL</u>
          </h4>
          <div className="img-div">
            
            <span className="ber">
            <img src={covid} alt="WIRIN Logo" className="image-proj"/>
              <br />
              • <u>Domain:</u><span className="span-exp"> Image Processing, Computer Vision, Machine Learning, Web Development</span><br />
              • <u>From:</u><span className="span-exp"> April 2021 </span>to<span className="span-exp"> July 2021</span><br />
              <br />
              <p className="para">
                • This is the Design Thinking Lab Project developed by me under the guidance of Dr. Sahana B, Asst. Prof. at RVCE. <br />
                • I developed a website for symptoms-based COVID detection and apython application for chest x-ray scan-based COVID detection. <br />
                • Used CNN algorithm for Image Processing of x-ray scan. Used Na¨ıve Bayes classifier for symptoms-based detection and programmed in JavaScript<br />
              </p>
              • <u>Tech Stack:</u><span className="span-exp"> HTML, CSS, JavaScript, Python</span><br />
              • <u>GitHub Repository Link:</u><span className="span-exp"> <a href="https://github.com/satviktiwari/COVID-Detection-Tool" target="_blank"> Click Here</a></span><br />
              • <u>Website Link:</u><span className="span-exp"> <a href="https://covid19-detection.netlify.app/" target="_blank"> Click Here</a> </span><br />
              <br />
            </span>
          </div>

        </div>
      </div>
    </div>
    <div className="mdc-card mdc-card--outlined" style={{ marginTop: "50px"}}>
      <div className="mdc-card__primary-action">
        <div className="mdc-card__title mdc-card__title--large temp">
          <h4 className="mdc-card__title-text main-heading-2">
            <u className="u-main">SUS MAFIA NGO Application</u>
          </h4>
          <div className="img-div">
            
            <span className="ber">
            <img src={susmafia} alt="WIRIN Logo" className="image-proj"/>
              <br />
              • <u>Domain:</u><span className="span-exp"> Full Stack Web Development</span><br />
              • <u>From:</u><span className="span-exp"> 4 June 2022 </span>to<span className="span-exp"> 5 June 2022</span><br />
              <br />
              <p className="para">
                • Developed a platform for Sus Mafia NGO to recruit volunteers. <br />
                • Incorporated user-side & company-side registration, candidate profile viewing feature, real-time chat application and candidate leader board functionality in the application.  <br />
                • Added blog writing feature in the application.<br />
                •  The project was awarded Runner-Up position in JPMorgan Chase & Co. Code for Good 2022 event.<br/>
              </p>
              • <u>Tech Stack:</u><span className="span-exp"> HTML, CSS, JavaScript, React JS, Node JS, Express, MongoDB, Firebase</span><br />
              • <u>GitHub Repository Link:</u><span className="span-exp"> <a href="https://github.com/satviktiwari/CRUD-Application" target="_blank"> Click Here</a></span><br />
              <br />
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
