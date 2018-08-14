import React, { Component } from 'react';
import './App.css';

// React Bootstrap components
import Grid from '../node_modules/react-bootstrap/lib/Grid';
import Row from '../node_modules/react-bootstrap/lib/Row';
import Col from '../node_modules/react-bootstrap/lib/Col';
import Table from '../node_modules/react-bootstrap/lib/Table';
import Form from '../node_modules/react-bootstrap/lib/Form';
import FormGroup from '../node_modules/react-bootstrap/lib/FormGroup';
import ControlLabel from '../node_modules/react-bootstrap/lib/ControlLabel';
import FormControl from '../node_modules/react-bootstrap/lib/FormControl';
import Button from '../node_modules/react-bootstrap/lib/Button';
import Navbar from '../node_modules/react-bootstrap/lib/Navbar';
import Nav from '../node_modules/react-bootstrap/lib/Nav';
import NavItem from '../node_modules/react-bootstrap/lib/NavItem';
import NavDropdown from '../node_modules/react-bootstrap/lib/NavDropdown';
import MenuItem from '../node_modules/react-bootstrap/lib/MenuItem';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#brand">FindJob.io</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Login
      </NavItem>
      <NavItem eventKey={2} href="#">
        Sign Up
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>

        <Grid>
        
          <Form horizontal>
            <FormGroup controlId="formHorizontalName">
              <ControlLabel>Name</ControlLabel>{' '}
              <FormControl type="text" placeholder="Front-end Developer" />
            </FormGroup>{' '}
            <Button type="submit">Search</Button>
          </Form>
          <br/>
          <Row className="show-grid">
            <Col md={12}>
              <Table striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Job</th>
                    <th>Location</th>
                    <th>Pay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Full-Stack Developer</td>
                    <td>Charlotte, NC</td>
                    <td>$85k</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <Col md={6} mdPush={6}>


            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default App;
