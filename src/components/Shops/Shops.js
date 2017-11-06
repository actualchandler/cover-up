import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './shop.css'

export default class Shops extends Component {

   render(){
      return (
         <div>
            <Grid>
               <Row>
                  <Col md={ 6 } mdOffset={ 3 }>
                        <a href="https://www.agpestores.com/coverup/groups.php" target="_blank" rel="noopener noreferrer">
                              <div className="online_shops">
                                    ONLINE SHOPS ENTER HERE
                              </div>
                        </a>
                  </Col>
               </Row>
            </Grid>
         </div>
      )
   }
}