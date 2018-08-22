import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="text-center">En liten header</h1>
        </header>
        <div className="main">
<<<<<<< HEAD
          <div className="empty-container">
            <Row className="show-grid">
            <Col xs={12}>
              <Col xs={10} className="front-img-col" style={{borderTop:'4px solid white', borderBottom:'4px solid white'}}>
              <div className="front-text-container">
                <div className="front-img-text-left fadeInUp"><p>visual brilliance</p></div> 
                <div className="front-img-text-right fadeInDown"><p>design</p></div>  
                <div className="front-img-text-right-down fadeInUp"><p>rethinking</p></div> 
              </div>            
                <img src={require('./img/test1.jpg')} className="front-img" />   
                <div className="circle-test rotateInDownRight"></div>
              </Col>
              <Col xs={1} className="col nopadding" style={{height:'100%'}}> 
                <div className="stripe"></div>
              </Col>
              <Col xs={1} className="col nopadding" style={{height:'100%', borderBottom:'4px solid white', borderTop:'4px solid white'}}> 
                <div className="stripe">
                <div className="fake-img" onClick={()=>{ alert('This is a fake image. Gotchu.'); }}></div>
                </div>
              </Col>
            </Col>
           </Row>
=======
          <div className="container">
          
>>>>>>> fe5006144fdd0e2de8c509179c51a832df5ae456
          </div>
        </div>
      </div>
    );
  }
}

export default App;
