import React, { Component } from 'react';
import { Row, Grid, Col, Button } from 'reactstrap';
import logo from './logo.svg';
import ScrollAnimation from 'react-animate-on-scroll';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p class="nopadding nomargin header-title">wanton.</p>
        </header>
        <div className="main">
          <div className="empty-container">
            <Row className="show-grid">
            <Col xs={12}>
              <Col xs={10} className="front-img-col" style={{borderTop:'4px solid white', borderBottom:'4px solid white'}}>
                <div className="front-img-text-left fadeInUp"><p>Visual brilliance</p></div>  
                <div className="front-img-text-right fadeInDown"><p>Design</p></div> 
              
                <img src={require('./img/test1.jpg')} className="front-img" />   
              </Col>
              <Col xs={1} className="col nopadding" style={{height:'100%'}}> <div class="stripe"></div></Col>
              <Col xs={1} className="col nopadding" style={{height:'100%', borderBottom:'4px solid white', borderTop:'4px solid white'}}> <div class="stripe"></div></Col>
            </Col>
           </Row>
          </div>
          <ScrollAnimation animateIn="fadeIn" offset="100" delay="100" animateOnce="true" duration="1.5" animatePreScroll="false">
            <Row className="page-grid">
                <Col sm={4} className="">
                  <Col sm={11} className="item">  
                  <img src={require('./img/test1.jpg')} className="grid-img" />   
                  </Col>
                </Col>
                <Col sm={4} className="">
                  <Col sm={11} className="item">
                  <img src={require('./img/test2.jpg')} className="grid-img" />   
                  </Col>
                </Col>
                <Col sm={4} className="">
                  <Col sm={11} className="item">
                  <img src={require('./img/test1.jpg')} className="grid-img" />   
                  </Col>
                </Col>
            </Row>
        </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default App;
