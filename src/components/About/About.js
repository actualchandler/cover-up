import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './about.css';

export default class About extends Component{
   render(){
      return (
         <div>
            <Grid>
               <Row>
                  <Col md={ 4 } mdOffset={ 5 }>
                     <span className="about_header">
                        About Us
                     </span>
                  </Col>
               </Row>
               <Row>
                  <Col md={ 10 } mdOffset={ 1 } className="text_header">
                        We are a family owned business and pride ourselves in quality services.
                  </Col>
               </Row>
               <Row>
                  <Col md={ 10 } mdOffset={ 1 }>
                     <div className="info">
                        Cover Up was established as a store front in 1995. It originally began as an upholstery business in the basement of a small home owned by the Smith family. From there it branched out to other small orders of t-shirts with transfers on them, and homemade reversible soccer jerseys with numbers applied by a heat press. Eventually an opportunity for a store front came on Main Street in Tremonton.
                     </div>
                  </Col>
               </Row>
               <Row>
                  <Col md={ 10 } mdOffset={ 1 } className="info">
                     The upholstery side was dropped a few years after the business opened and Cover Up branched into the embroidery and screen printing business. It started with one small single head embroidery machine and all of the screen printing was sub-contracted out.
                  </Col>
               </Row>
               <Row>
                  <Col md={ 10 } mdOffset={ 1 } className="info">
                     As time went on the business was able to invest into a 4 head embroidery machine and eventually screen printing equipment. In 2004, the business expanded and opened a second location in Brigham City. It is now the the leading Emboridery & Screen Printing business in Box Elder County.
                  </Col>
               </Row>
            </Grid>
            <img src={ require('../../img/thread-wall.jpg')} alt="Thread Wall" className="info_img"/>
         </div>
      )
   }
}