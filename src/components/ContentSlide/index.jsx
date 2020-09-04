import React, { Component } from 'react';
import { Carousel } from 'antd';

import './styles.css';

function onChange(a, b, c) {
    console.log(a, b, c);
  }
  
const contentStyle = {
    width: '50%',
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
};

export class ContentSlide extends Component {

    render() {
        return (
            <Carousel afterChange={onChange}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>
        );
    }
}

export default ContentSlide;