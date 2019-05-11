import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import WelcomePage from '../views/Home';
import About from '../views/About';
import Resume from '../views/Resume';
import Photos from '../views/Photos';

function PageHeader() {

  const routes = [
    {
      title: 'Home',
      to: '/',
      component: WelcomePage,
      exact: true
    }, {
      title: 'About',
      to: '/about',
      component: About
    }, {
      title: 'Resume',
      to: '/resume',
      component: Resume
    }, {
      title: 'Photos',
      to: '/photography',
      component: Photos
    }
  ]

  return (
    <React.Fragment>
      <Navbar expand="sm" className="px-sm-4 pt-sm-3 pb-sm-5">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {routes.map((route, i) => (
              <NavLink className="nav-link mx-sm-2 p-sm-0" activeClassName="active" key={i} {...route}>{route.title}</NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default PageHeader