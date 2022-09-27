import MotionHoc from "./MotionHoc";
import "../Pages/Home.css"
import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import ImageSatvik from '../assets/satvik.png'
import cpp from "../assets/badge_cpp.png"
import js from "../assets/badge_js.png"
import ps from "../assets/badge_ps.png"
import sql from "../assets/badge_sql.png"
import lc75 from "../assets/lc_75.png"
import lc_algo from "../assets/lc_algo.png"
import lc_ds from "../assets/lc_ds.png"
import lc_apr from "../assets/lc_apr.png"
import lc_july from "../assets/lc_july.png"

const ContainerExampleFluid = () => (
  <div className="main-div">
    <Container fluid>
      <Icon name='hand peace' />
      <Header as='h2' className="main-header"><u className="main-about">About Me</u></Header><br />
      <div className="img-div">
        <img src={ImageSatvik} alt="Satvik Tiwari" />
        <span>
          <p>
            I am a proficient and intentional programmer skilled in Data Structures, Algorithms & Full Stack Web Development.
            I have good command on Programming Languages like C, C++ and Python. I am
            also skilled in Web Development and I have hands on experience with HTML, CSS, JavaScript, React JS, Express and Node JS.
            I have worked on Firebase, MongoDB and MySQL for Database Development and Management.
            I have good knowledge in Machine Learning and I have worked on Python, R, OpenCV for Image Processing.
          </p>
        </span>
      </div>
      <hr />
      <p>
        <u className="main-about">Familiar Tech Stack</u>:<br /><br />
        • <u>Programming Languages</u>:<br />
        &nbsp; &nbsp; ‣ Proficient: C, C++<br />
        &nbsp; &nbsp; ‣ Beginner: Python, Java, JavaScript<br /><br />
        • <u>Web Development</u>:<br />
        &nbsp; &nbsp; ‣ Front-End: HTML, CSS, JavaScript, React JS <br />
        &nbsp; &nbsp; ‣ Back-End: Express, Node JS<br />
        &nbsp; &nbsp; ‣ Frameworks: Bootstrap, Semantic UI, Material UI<br /><br />
        • <u>Database</u>: <br />
        &nbsp; &nbsp; ‣ SQL Database: MySQL, SQLite<br />
        &nbsp; &nbsp; ‣ No SQL Database: Firebase, MongoDB<br /><br />
        • <u>Machine Learning</u>: Python, R, OpenCV, Image Processing<br />
      </p>
      <hr />
      <p>
        LeetCode: &nbsp; &nbsp;
        <img src={lc_ds} alt="Data Structures" />
        <img src={lc_algo} alt="Algorithms" />
        <img src={lc75} alt="Curated 75" />
        <img src={lc_apr} alt="April Monthly Challenge" />
        <img src={lc_july} alt="July Monthly Challenge" />
        <br/>
        <hr/>
        <br/>

        HackeRank: &nbsp; &nbsp;
        <img src={ps} alt="Problem Solving" />
        <img src={cpp} alt="C++" />
        <img src={js} alt="JS" />
        <img src={sql} alt="SQL" />
        <br/>
        <hr/>

        GitHub: &nbsp; &nbsp;
        <img className="git_old" src="https://github-readme-stats.vercel.app/api?username=satviktiwari&&show_icons=true&theme=algolia" alt="Windows"/>
        <img className="git" src="https://github-readme-stats.vercel.app/api/top-langs/?username=satviktiwari&&show_icons=true&theme=algolia" alt="Windows"/>
        <br/>
        <hr/>
        
      </p>
      <hr />
    </Container>
  </div>
)

const Home = MotionHoc(ContainerExampleFluid);

export default Home;
