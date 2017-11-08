import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './catalogs.css';

export default class Catalogs extends Component{
   render(){
      return (
         <Grid>
            <Row className="catalogs_header">
               Our Suppliers
            </Row>
            <Row>
               <Col md={ 4 } mdOffset={ 2 }>
               <a href="http://companycasuals.com/coverup/start.jsp" target="_blank" rel="noopener noreferrer">
                  <img src={ require('../../img/sanmar.jpg') } alt="SanMar" className="catalog_img"/>
               </a>
               </Col>
               <Col md={ 4 }>
                  <a href="http://ottocap.com/" target="_blank" rel="noopener noreferrer">
                     <img src={ require('../../img/otto.jpg') } alt="Otto Cap" className="catalog_img"/>
                  </a>
               </Col>
            </Row>
            <Row>
               <Col md={ 4 } mdOffset={ 2 }>
                  <a href="http://www.4logowearables.com/coverupemb" target="_blank" rel="noopener noreferrer">
                     <img src={ require('../../img/alphaborder.jpg') } alt="AlphaBroder" className="catalog_img"/>
                  </a>
               </Col>
               <Col md={ 4 }>
                  <a href="https://www.augustasportswear.com/" target="_blank" rel="noopener noreferrer">
                     <img src={ require('../../img/augusta.jpg') } alt="SanMar" className="catalog_img"/>
                  </a>
               </Col>
            </Row>
         </Grid>
      )
   }
}