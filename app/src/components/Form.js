import React, { Component } from 'react';
import FieldGroup from './FieldGroup.js';
import {DropdownButton, MenuItem, Panel, ButtonToolbar, Button, Row, Col, Grid} from 'react-bootstrap'
import '../css/form.css';
class Form extends Component {

  constructor(){
    super();
    this.state = {
      ticket:''
    }    

    this._handleForm = this._handleForm.bind(this)
  }

  _handleForm(event) {
    event.preventDefault();

    // let fieldName = event.target.name;
    // let fleldVal = event.target.value;
    // console.log(this.ticket,fleldVal)
    // this.setState({form: {...this.state.form, [fieldName]: fleldVal}})
  }

  render() {
    const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
    return (
      <Grid>
      <Row className="show-grid">
        <Col xs={3} sm={3} md={3}/>
        <Col xs={6} sm={6} md={6}>
          <Panel>
            <form ref={(input) => this.recipeForm = input} onSubmit={this._handleForm}>
            <div className="header">
              <h1>StatEZ</h1>
              <p>Your US federal applications made easy.</p>
            </div>
            <p className="form-header">Check your case status by entering the information below</p>
              <FieldGroup 
                id="formControlsText"
                type="text"
                label="Receipt Number"
                placeholder="Receipt Number ID"
                inputRef={(input) => this.ticket = input}
              />
               <br/>
              <FieldGroup 
                id="formControlsText"
                type="text"
                label="Date Receipt Number was Received"
                placeholder="Enter date"
                inputRef={(input) => this.recievedDate = input}
              />
              <ButtonToolbar>
                <Button type="submit">Submit</Button>
              </ButtonToolbar>
            </form>
          </Panel>
        </Col>
        <Col xs={3} sm={3} md={3}/>
      </Row>
      </Grid>
    );
  }
}

export default Form