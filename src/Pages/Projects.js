import MotionHoc from "./MotionHoc";
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBTextArea } from 'mdb-react-ui-kit';


const ContainerExampleFluid = () => (
  <div className="main-div" style={{ marginTop: "50px" }}>
    <u><h2 className="main-header">Contact Me</h2></u>
    <br />
    <p>Fill the form below for any queries/details:</p>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Message</Form.Label>
        <MDBTextArea label='' id='textAreaExample' rows={4} placeholder="Enter your message"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>

)


const Projects = MotionHoc(ContainerExampleFluid);

export default Projects;
