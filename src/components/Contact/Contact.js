import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './contact.css';

export default class Contact extends Component {
   render(){
      return (
         <div>
            <Grid>
               <Row className="contact_header">
                  Contact Us
               </Row>
               <Row>
                  <Col md={ 2 } mdOffset={5} className="info_paragraph">
                     <span className="text_header">Store Hours</span>
                     <br />
                     Monday thru Friday
                     <br />
                     10AM-6PM
                  </Col>
               </Row>
               <Row>
                  <Col md={ 4 } mdOffset={ 4 } className="info_paragraph">
                     <span className="text_header">Cover Up | Brigham City</span>
                     <br />
                     47 South Main
                     <br />
                     Brigham City, UT 84302
                     <br />
                     (435) 723-2266
                     <br />
                     coverupbc@yahoo.com
                  </Col>
               </Row>
               <Row>
                  <Col md={ 4 } mdOffset={ 4 } className="info_paragraph">
                     <span className="text_header">Cover Up | Tremonton</span>
                     <br />
                     115 West Main
                     <br />
                     Tremonton, UT 84337
                     <br />
                     (435) 257-7600
                     <br />
                     coverup@frontier.net
                  </Col>
               </Row>
               <Row>
                  <Col md={ 6 } mdOffset={ 3 } className="bottom">
                     <div className="p_header">Some Things to Have in Mind</div>
                     <br />
                     <span className="text_header">Service:</span> Are you asking about screen printing or embroidery?
                     <br />
                     <span className="text_header">Item:</span> What are we ordering for you?
                     <br />
                     <span className="text_header">Quantity:</span> How many items do you need?
                     <br />
                     <span className="text_header">Placement:</span> Will your design be on the front of the shirt, the back, the seeve, etc.
                     <br />
                     <span className="text_header">Colors:</span> How many colors is your design?
                  </Col>
               </Row>
               <Row>
                  <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2987.7645123815773!2d-112.01775798477794!3d41.5093776792532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87537ae466075515%3A0xf0a8e03067690a79!2s47+S+Main+St%2C+Brigham+City%2C+UT+84302!5e0!3m2!1sen!2sus!4v1509035592148" width="1200" height="500" frameborder="0" allowfullscreen></iframe>
               </Row>
            </Grid>
         </div>
      )
   }
}