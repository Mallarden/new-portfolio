import React, { Component } from 'react';


const IDLE_TIME = 1000;
const TRANSITION_TIME = 900;
const STEP_IDLE = 0;
const STEP_CHANGE_FRONT = 1;
const STEP_CHANGE_BACK = 2;
const IMAGE_LIST = [
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/image-slider-1.jpg',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/image-slider-2.jpg',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/image-slider-3.jpg',
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/329679/image-slider-4.jpg',
];

class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.makeFrontImageChange = this.makeFrontImageChange.bind(this);
    this.makeBackImageToNext = this.makeBackImageToNext.bind(this);
    this.startToMove = this.startToMove.bind(this);
    this.state = {
      index: 1,
      step: STEP_IDLE,
      frontImage: props.images[0],
      backImage: props.images[1],
    };
  }
  componentDidMount() {    
    this.startToMove();
  }
  componentDidUpdate(prevProps, prevState) {
    const { step, index } = this.state;
    
    if (prevState.step === STEP_IDLE && step === STEP_CHANGE_FRONT) {
      this.makeFrontImageChange();
    } else if (prevState.step === STEP_CHANGE_FRONT && step === STEP_CHANGE_BACK) {
      this.makeBackImageToNext();
    } else if (prevState.step === STEP_CHANGE_BACK && step === STEP_IDLE) {
      this.startToMove();
    }
  }
  startToMove() {
    setTimeout(() => {
      this.setState({
        step: STEP_CHANGE_FRONT,
      });
    }, IDLE_TIME);
  }
  makeFrontImageChange() {
    const { index, backImage } = this.state;
    const { images } = this.props;
    
    setTimeout(() => {
      this.setState({
        step: STEP_CHANGE_BACK,
        index: (index + 1 >= images.length) ? 0 : index + 1,
        frontImage: backImage,
      });
    }, TRANSITION_TIME);
  }
  makeBackImageToNext() {
    const { index } = this.state;
    const { images } = this.props;
    
    this.setState({
      step: STEP_IDLE,
      backImage: images[index],
    })
  }
  render() {
    const { index, step, frontImage, backImage } = this.state;
    
    return (
      <div 
        className={classNames(
          'wrapper',
          { '_move': step === STEP_CHANGE_FRONT },
        )}
        style={{
          backgroundImage: `url(${backImage})`
        }}
      >
        <div
          className="front-image"  
          style={{
            backgroundImage: `url(${frontImage})`
          }}
        />
      </div>
    );
  }
}

export default ImageSlider;