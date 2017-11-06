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
                  <img src={ require('../../img/sanmar.jpg') } alt="SanMar" className="catalog_img"/>
               </Col>
               <Col md={ 4 }>
                  <img src={ require('../../img/otto.jpg') } alt="Otto Cap" className="catalog_img"/>
               </Col>
            </Row>
            <Row>
               <Col md={ 4 } mdOffset={ 2 }>
                  <img src={ require('../../img/alphaborder.jpg') } alt="AlphaBroder" className="catalog_img"/>
               </Col>
               <Col md={ 4 }>
                  <img src={ require('../../img/augusta.jpg') } alt="SanMar" className="catalog_img"/>
               </Col>
            </Row>
         </Grid>
      )
   }
}