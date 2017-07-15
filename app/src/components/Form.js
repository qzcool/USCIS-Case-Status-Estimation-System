import React, { Component } from 'react';
import FieldGroup from './FieldGroup.js';
import {DropdownButton, MenuItem, Panel, ButtonToolbar, Button, Row, Col, Grid} from 'react-bootstrap'

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
          <Panel header={<h1>Form</h1>}>
            <form ref={(input) => this.recipeForm = input} onSubmit={this._handleForm}>
              <FieldGroup 
                id="formControlsText"
                type="text"
                label="Ticket"
                placeholder="Enter ticket id"
                inputRef={(input) => this.ticket = input}
              />
               <br/>
              <FieldGroup 
                id="formControlsText"
                type="text"
                label="Email Recieved"
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