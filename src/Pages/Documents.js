import MotionHoc from "./MotionHoc";
import React from 'react'
import "../Pages/Home.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBTextArea } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import rvce from '../assets/rvce.png'
import aecs from '../assets/aecs.png'

const ContainerExampleFluid = () => (
  <div className="main-div" style={{ marginTop: "50px" }}>
    <u><h2 className="main-header">Education</h2></u>
    <br />
    <MDBCard>
      <MDBCardImage className="rounded mx-auto d-block" src={rvce} style={{height:"100px", width:"100px", marginTop:"10px"}} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>RV College of Engineering, Bangalore, India</MDBCardTitle>
        <MDBCardText>
          2019-2023<br/>
          Bachelor of Engineering in Electronics and Communication<br/>
          CGPA: 8.85<br/>
          Courses: Data Structures and Algorithms, Database Management System, Computer Networks, Signal Processing and Machine Learning
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    <br/>
    <MDBCard>
      <MDBCardImage className="rounded mx-auto d-block" src={aecs} style={{height:"160px", width:"100px", marginTop:"10px"}} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Atomic Energy Central School, Indore, India</MDBCardTitle>
        <MDBCardText>
          2007-2019<br/>
          Higher Secondary<br/>
          Grade: Class 10th -> CGPA 10 (CBSE 2019), Class 12th -> 93.4% (CBSE 2019)<br/>
          Subjects: Physics, Chemistry, Mathematics, Computer Science, English
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    <br/>
  </div>

)


const Documents = MotionHoc(ContainerExampleFluid);

export default Documents;
