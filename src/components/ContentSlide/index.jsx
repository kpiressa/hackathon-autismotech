import React, { Component } from 'react';
import { Carousel } from 'antd';

import './styles.css';

import SlideBackground from '../../assets/home.jfif';
import Slide2Background from '../../assets/slide1.jpg';
import Slide3Background from '../../assets/slide2.jpg';
import Slide4Background from '../../assets/slide3.jpg';

function onChange(a, b, c) {

}
  
const slide1Style = {
    width: '50%',
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${SlideBackground})`,
};

const slide2Style = {
  width: '50%',
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${Slide2Background})`,
};

const slide3Style = {
  width: '50%',
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${Slide3Background})`,
};

const slide4Style = {
  width: '50%',
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage: `url(${Slide4Background})`,
};

export class ContentSlide extends Component {

    render() {
        return (
            <Carousel afterChange={onChange} autoplay dots={true} effect="fade">
            <div>
              <div style={slide1Style} />
            </div>
            <div>
              <div style={slide2Style} />
            </div>
            <div>
              <div style={slide3Style} />
            </div>
            <div>
              <div style={slide4Style} />
            </div>
          </Carousel>
        );
    }
}

export default ContentSlide;