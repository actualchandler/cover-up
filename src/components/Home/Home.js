import React, { Component } from 'react';
import './home.css'
import PrintavoQuote from '../Printavo/PrintavoQuote';

import { Grid, Row, Col } from 'react-bootstrap';

export default class Home extends Component{
   render(){
      return (
         <div>
            <Grid>
               <Row>
                  <img className="banner" src={ require('../../img/banner_png.png')} alt="Cover Up" />
               </Row>
                  {/* Video */}
                  <Row className="vid">
                     <Col md={ 7 } >
                        <iframe title="bryon-printing" width="100%" height="350" frameBorder="0" seamless="seamless" src="https://www.youtube.com/embed/M1FBGHxHwsI" allowFullScreen></iframe>
                     </Col>
                     <Col md={ 5 } className="vid_text">
                        We Print Quality Product With The Highest Standards
                        <br />
                        <br />
                        And We Print It All By Hand
                     </Col>
                  </Row>
               </Grid>

               <div className="services">
                  <Grid>
                     <Row className="services_header">
                        Services
                     </Row>
                     <Row>
                        <Col md={ 2 } >
                           <img src={ require('../../img/embicon.png') } alt="Emboridery" className="services_icon"/>
                        </Col>
                        <Col md={ 4 } className="services_info">
                        <span className="services_text_header">EMBROIDERY</span>
                           <br />
                           Pricing by stitch count
                           <br />
                           No color limit
                           <br />
                           Digitize your logo for a one time fee
                           <br />
                           Highest quality standards
                        </Col>
                        <Col md={ 3 } mdOffset={ 1 }>
                           <img src={ require('../../img/ink.jpg') } alt="Ink" className="services_img" />
                        </Col>
                     </Row>
                     <Row>
                        <Col md={ 2 } >
                           <img src={ require('../../img/tshirticon.png') } alt="Screen Printing" className="services_icon"/>
                        </Col>
                        <Col md={ 4 } className="services_info">
                        <span className="services_text_header">SCREEN PRINTING</span>
                           <br />
                           No minimum
                           <br />
                           Plastisol & Discharge Inks
                           <br />
                           No setup fees on orders of 50 or more
                           <br />
                           Best Screen Printer in North America: Byron Sorenson
                        </Col>
                     </Row>
                     <Row>
                        <Col md={ 2 }  >
                           <img src={ require('../../img/designicon.png') } alt="Design" className="services_icon"/>
                        </Col>
                        <Col md={ 4 } className="services_info">
                           <span className="services_text_header">DESIGN</span>
                           <br />
                           Artwork for $25/hr
                           <br />
                           Get a mockup of your design
                           <br />
                           All artwork kept on file for future orders
                           <br />
                           Creative help if youre unsure what you're looking for
                        </Col>
                     </Row>
                  </Grid>
               </div>
            
              <div>
                    <Grid>
                          <Row>
                                <Col md={ 4 } mdOffset={ 4 } className="quote_header">
                                    Get A Quote!
                              </Col>
                        </Row>
                        <Row>
                          <Col md={ 4 } mdOffset={ 4 } >
                              <PrintavoQuote />
                          </Col>
                        </Row>
                  </Grid>
            </div>
 
         </div>
      )
   }
}