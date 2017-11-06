import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class Login extends Component {
   constructor(props){
      super(props)
      this.state = {
         storeId: 0,
         password: ''
      }
   }

   handleClick(event) {
      let values = {
         id: this.state.storeId,
         password: this.state.password
      }
      alert(values);
   }

   render(){
      return (
         <Grid>
            <Row>
               <Col md={ 4 } mdOffset={ 5 }>
                  <MuiThemeProvider>
                     <div>
                        <TextField
                           hintText="Enter Store ID"
                           floatingLabelText="Store ID"
                           onChange={ (event, newValue) => {
                              this.setState({ storeId: newValue })
                           }}
                        />
                        <br />
                        <TextField
                           type="password"
                           hintText="Enter Password"
                           floatingLabelText="Password"
                           onChange={ (event, newValue) => {
                              this.setState({ password: newValue })
                           }}
                        />
                        <br />
                        <RaisedButton
                           label="Submit"
                           primary={ true }
                           style={ style }
                           onClick={ (event) => {
                              this.handleClick(event)
                           }}
                        />
                     </div>
                  </MuiThemeProvider>
               </Col>
            </Row>
         </Grid>
      )
   }
}

const style = {
   margin: 15
};