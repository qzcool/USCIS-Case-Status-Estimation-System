import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard.js'
import Form from './components/Form.js'
import Nav from './components/Nav.js'
import {Row, Col, Grid}  from 'react-bootstrap'
class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="top"></div>
        <Nav className="top"/>
        <Grid>
          <Row className="page-cont">
            <Col md={12}>
              <Form/>
            </Col>
          </Row>
        </Grid>
        <div className="footer"></div>
      </div>
    );
  }
}

export default App;
