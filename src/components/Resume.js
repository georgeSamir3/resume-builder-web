import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Profile from './Profile';
import About from './About';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
// import Languages from './Languages';
import { NavLink } from 'react-router-dom';

function Resume() {
  return (
    <Fragment>

      <div className='row'>

      <div className='col-1'></div>
      <Container className='col-7' style={{marginTop:"150px"}}>

        <Profile></Profile>

        <About></About>

        <Experience></Experience>

        <Education></Education>

        <Skills></Skills>

        {/* <Languages></Languages> */}

        <div className="d-grid col-2 mx-auto my-4 text-center">
          <NavLink className="nav-link align-middle bg-dark text-white p-2 rounded" to="/preview">Preview</NavLink>
        </div>

      </Container>
      <Container fluid className="p-0 top-image col-3" style={{marginTop:"100px"}} ></Container>
      <div className='col-1'></div>
      </div>
    </Fragment>
  )
}

export default Resume