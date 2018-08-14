import React, { Component } from 'react';
import logo from './logo.svg';
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



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

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
