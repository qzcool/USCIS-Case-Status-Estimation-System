import React, { Component } from 'react';
import {Row, Col, Grid, Tab, Nav, NavItem} from 'react-bootstrap'

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
  		<Grid>
			<Row className="show-grid">
		      <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
		      <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
		    </Row>
		</Grid>
      </div>
    );
  }
}

export default Dashboard