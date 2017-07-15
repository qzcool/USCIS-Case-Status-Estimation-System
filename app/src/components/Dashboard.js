import React, { Component } from 'react';
import {Row, Col, Grid,ProgressBar,ButtonToolbar, Button, Form} from 'react-bootstrap'
import FieldGroup from './FieldGroup.js'
import '../css/dashboard.css';
import RedPin from '../assets/pin_red.svg';
import YellowPin from '../assets/pin_yellow.svg';
import TealPin from '../assets/pin_teal.svg';
import caution from '../assets/caution.svg';
import Envelope from '../assets/envelope.svg';
import Office from '../assets/office.svg';
import Phone from '../assets/phone.svg';
import CircleRed from '../assets/circle_red.svg';
import CircleTeal from '../assets/circle_teal.svg';
import CircleYellow from '../assets/circle_yellow.svg';



class Dashboard extends Component {
  constructor(){
    super()
    this.state={
      data:{
        pos:50,
        points:[45,30,25]
      }
    }
    this.renderTeal = this.renderTeal.bind(this)
    this.renderYellow = this.renderYellow.bind(this)
    this.renderRed = this.renderRed.bind(this)
  }

  renderTeal(){
    return (this.state.data.pos < 45) ? <img style={{width:100+"%"}} src={TealPin} /> : <p></p> 
  }
  renderYellow(){
    return (this.state.data.pos >= 45 && this.state.data.pos <= 75) ? <img style={{width:100+"%"}} src={YellowPin} /> : <p></p> 
  }
  renderRed(){
    return (this.state.data.pos > 75) ? <img style={{width:100+"%"}} src={RedPin} /> : <p></p> 
  }
  render() {
    const indicatorStyle = {
      position:"relative",
      left:this.state.data.pos + "%",
      width:40 + "px",
      height:40 + "px",
      marginBottom: 28 + "px"
    }

    const points = this.state.data.points;
    console.log(this.state.data.pos);
    return (
      <div className="App">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={12} md={12}>
              <div className="header-cont">
              <p className="ticket">Case No. TEZ56742948DN7</p>
              <h1>Status: Case Status Pending</h1>
              <p> <span>14% of people who signed up the same day you did have already been approved </span></p>
              </div>
              <div className="progress-bar-cont">
                <div className="indicator" style={indicatorStyle}>
                  {this.renderTeal()}
                  {this.renderYellow()}
                  {this.renderRed()}   
                </div>

                <p className="info-labels" style={{width:200 + "px","marginTop":50 + "px", position:"absolute",left: 1.5 + '%',display:"inline-block"}}> <span>Application Submitted</span> <br/> March 30, 2017 <br/> </p>
                <p className="info-labels" style={{width:200 + "px","marginTop":50 + "px", position:"absolute",left: points[0] + '%',display:"inline-block"}}> <span>75 Day Mark</span> <br/> <br/> After 75 days if you have not received a status update by this date, you have the option to contact your local office to obtain a temporary EAD </p>
                <p className="info-labels" style={{width:200 + "px","marginTop":50 + "px", position:"absolute",left: points[0] + points[1] + '%',display:"inline-block"}}><span>90 Day Mark</span> <br/> <br/> If you have not received a status update by this date, you must contact your local office.</p>
                <img src={CircleTeal} alt="" style={{width:30 + "px","marginTop":-5 + "px", position:"absolute",left: 0.8 + '%',display:"inline-block"}} />
                <img src={CircleYellow} alt="" style={{width:30 + "px","marginTop":-5 + "px", position:"absolute",left: points[0] - 1 + '%',display:"inline-block"}}/>
                <img src={CircleRed} alt="" style={{width:30 + "px","marginTop":-5 + "px", position:"absolute",left: points[0] + points[1] - 1 + '%',display:"inline-block"}}/>
                <ProgressBar>
                  <ProgressBar bsStyle="success" now={points[0]} key={1} />
                  <ProgressBar bsStyle="warning" now={points[1]} key={2} />
                  <ProgressBar bsStyle="danger" now={points[2]} key={3} />
                </ProgressBar>
              </div>
            </Col>
          </Row>
          <div style={{"marginTop":200 + "px"}} className="warning-panel">
            <div className="content">
              <img style={{display:"inline-block"}} src={caution} alt=""/>
              <h3 style={{display:"inline-block"}}>82 days have passed since you submitted your application.</h3> <br/> <br/> 
              <p>85% of applicants typically receive their case status after 75 days of submitting their application. Since it has been over 75 days since you submitted your application, we recommend you follow up with your local USCIS office to check on your status. <span>You may be eligible for a temporary EAD.</span></p> 
            </div>
          </div>
           
          <div className="info-panel">
            <div className="content">
              <div className="info-header">
                <h3>Here’s what you can do to follow up.</h3>
                <p>Reach out to your local office to learn more about the status of your application and inquire about obtaining a temporary EAD. </p>
              <Form inline>
              <FieldGroup 
                id="formControlsText"
                type="text"
                placeholder="Your zip code"
                inputRef={(input) => this.ticket = input}
              />
              <ButtonToolbar>
                <Button type="submit">Submit</Button>
              </ButtonToolbar>
            </Form>
            </div>
              <div className="help-panel">
                <img src={Phone} alt=""/>
                <h3>Make a Call*</h3>
                <p><br/>Call your regional service line: <br/> Julian Hok <br/> 646-284-1123</p> 
                <p>*Recommended Option</p>
              </div>
              <div className="help-panel">
                <img src={Envelope} alt=""/>
                <h3>Email USCIS</h3>
                <p><br/>E-mail your region’s contact: <br/> ucscisny@ny.gov</p>
              </div>
              <div className="help-panel">
                <img src={Office} alt=""/>
                <h3>Visit the Office</h3>
                <p><br/>Travel to your area’s nearest office: <br/> 232 Main Street, <br/> Flushing, New York  <br/> <br/> <a href="#">View link on Google Maps</a></p>
              </div>
            </div>
          </div>
          <div className="enroll-user">
            <h1>
              Want to get updates about your application status ? <br/> Sign up for email reminders.
            </h1>
            <Form inline>
              <FieldGroup 
                id="formControlsText"
                type="text"
                placeholder="Email Address"
                inputRef={(input) => this.ticket = input}
              />
              <ButtonToolbar>
                <Button type="submit">Submit</Button>
              </ButtonToolbar>
            </Form>
          </div>
        </Grid>
        
      </div>
    );
  }
}

export default Dashboard