import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import './main.css';

// Components
import About from '../About/About'
import Home from '../Home/Home'
import Catalogs from '../Catalogs/Catalogs'
import Shops from '../Shops/Shops'
import Contact from '../Contact/Contact'
import Login from '../Login/Login';

class Main extends Component{
   constructor(props){
      super(props)
      this.state = {
         component: 'home'
      }
   }

   renderComponent(){
      switch(this.state.component){
         case 'about':
            return (
               <About />
            )
         case 'catalogs':
            return (
               <Catalogs />
            )
         case 'shops':
            return (
               <Shops />
            )
         case 'contact':
            return (
                <Contact />
            )
         case 'login':
            return (
                  <Login />
            )
         default:
            return (
               <Home />
            )
      }
   }

   render() {
      return (
            <div>
               <Grid>
                     <Row className="nav">
                           <Col className="nav_padding" md={ 2 } onClick={ () => this.setState({ component: 'catalogs' }) }>
                              CATALOGS
                           </Col>
                           <Col className="nav_padding" md={ 2 } onClick={ () => this.setState({ component: 'shops' }) }>
                              SHOP
                           </Col>
                           <Col md={ 4 }>
                              <img className="nav_img" src={ require('../../img/nav-logo.png')} alt="Home" onClick={ () => this.setState({ component: 'home' }) }/>
                           </Col>
                           <Col className="nav_padding" md={ 2 } onClick={ () => this.setState({ component: 'about' }) }>
                              ABOUT
                           </Col>
                           <Col className="nav_padding" md={ 2 } onClick={ () => this.setState({ component: 'contact' }) }>
                              CONTACT
                           </Col>
                        </Row>
                  </Grid>

               { this.renderComponent() }
               <div className="footer">
                  <Grid>
                    <Row>
                          <a href="https://www.instagram.com/coverupbc/"><img src={ require('../../img/insta.png') } alt="Instagram" className="footer_img" /></a>
                    </Row>
                    <Row>
                         <div onClick={ () => this.setState({ component: 'login' }) }>&copy; 2017 Cover Up | All Rights Reserved</div>
                    </Row>
                  </Grid>
               </div>

            </div>
      )
   }
}

export default connect(null, null)(Main)