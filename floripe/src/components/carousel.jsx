//Libs
import React, { Component } from "react";
import Slider from "react-slick";

// style
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css'

// Imgs
import slideImage from '../assets/floripa.jpg';
import { Share } from "./share";
import { Locked }from './lockImage';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows= {false}
          className="slider"
        >

          <div className="slideItem">
            <div className="slideItemTrue">
              <img src={slideImage} alt="Evento"/>
              <Share />
            </div>
          </div>

          <div className="slideItem">
            <div className="slideItemTrue">
              <img src={slideImage} alt="Evento"/>
              <Share />
            </div>
          </div>

          <div className="slideItem">
            <Locked />
          </div>

          <div className="slideItem">
            <Locked />
          </div>

          <div className="slideItem">
            <Locked />
          </div>

          <div className="slideItem">
            <Locked />
          </div>
        </Slider>

        <h3 className='questionBeforeCarousel'>CONFIRA O QUE JÁ SAIU E O QUE ESTÁ POR VIR!</h3>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          dots={true}
          infinite={false}
        >

          <div className="containerThumb">
            <img src={slideImage} className="Thumb" alt="Evento"/>
            <p>16 DE MARÇO</p>
          </div>
          <div className="containerThumb">
            <img src={slideImage} className="Thumb" alt="Evento"/>
            <p>17 DE MARÇO</p>
          </div>
          <div className="containerThumb">
            <Locked />
            <p>18 DE MARÇO</p>
          </div>
          <div className="containerThumb">
            <Locked />
            <p>21 DE MARÇO</p>
          </div>
          <div className="containerThumb">
            <Locked />
            <p>22 DE MARÇO</p>
          </div>
          <div className="containerThumb">
            <Locked />
            <p>23 DE MARÇO</p>
          </div>
        </Slider>
      </div>
    );
  }
}