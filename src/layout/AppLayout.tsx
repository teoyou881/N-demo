import React from 'react'
import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import {Outlet} from 'react-router-dom';

const AppLayout = () => {
  return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="/">NF</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll"/>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{maxHeight:'100px'}}
                  navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/movies">Movie</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Outlet/>
      </>
  );
}

export default AppLayout
