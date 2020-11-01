import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import GreenvyLogo from '../images/greenlogo.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

function NavgBar(props) {
    return(
        <Navbar style={{backgroundColor: "#212121"}} expand="lg">
  <Navbar.Brand>
    <img style={{width: "55%"}} src={GreenvyLogo} alt="greenvy-img"/>
  </Navbar.Brand>
    
      
      {props.user?
      <> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Link to="/dashboard"><p className="nav-link">Dashboard</p></Link>
      <Link to="/"><p className="nav-link">Events</p></Link>
      <Link to="/"><p className="nav-link">Profile</p></Link>
      <div className="nav-user-info nav-link">
        <img src={props.user.profile_img} alt="user-img"/>
        <p>{props.user.username}</p>
      </div>
      <Link to="/"><Button onClick={props.logout} variant="outline-light"> Logout </Button></Link>
    </Nav>
    </Navbar.Collapse>
      </>
      : <> <Link to="/login"><Button variant="info"> Login </Button></Link> <Link to="/signup"><Button variant="warning"> Sign Up </Button></Link></>}
</Navbar>
    )
}

export default NavgBar;