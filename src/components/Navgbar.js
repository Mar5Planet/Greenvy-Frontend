import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import GreenvyLogo from '../public/images/greenlogo.png';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

function NavgBar(props) {
    return(
        <Navbar style={{backgroundColor: "#d3d4e1", padding: "0.5% 2%", display: "sticky"}} expand="lg">
  <Navbar.Brand>
    <img style={{width: "65%"}} src={GreenvyLogo} alt="greenvy-img"/>
  </Navbar.Brand>
    
      
      {props.user?
      <> 
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav >
      <Link to="/dashboard"><p className="nav-link">Dashboard</p></Link>
      <Link to="/events"><p className="nav-link">Events</p></Link>
      <Link to={`/profile/${props.user.id}`}>      
        <img className="nav-user-info-img nav-user-info nav-link" src={props.user.profile_img} alt="user-img"/>
    </Link>

      <Link to="/"><Button onClick={props.logout} variant="outline-dark"> Logout </Button></Link>
    </Nav>
    </Navbar.Collapse>
      </>
      : <> <Nav className="home-nav"><Link to="/login"><Button variant="info" className="homepage-btn"> Login </Button></Link> <Link to="/signup"><Button variant="warning" className="homepage-btn"> Sign Up </Button></Link></Nav></>}
</Navbar>
    )
}

export default NavgBar;