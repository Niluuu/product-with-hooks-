import React, { Component } from 'react'
import Slider from "react-slick";
import {ProductConsumer} from '../providers/Product'


export class ProductSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <ProductConsumer>
      {props => 
      <div  >
        <Slider {...settings}>
          <div>
            <img src={props.picture} />
          </div>
          <div>
            <img src={props.picture} />
          </div>
          <div>
            <img src={props.picture} />
          </div>  
        </Slider>
      </div>}
    </ProductConsumer>
    )
  }
}

export default ProductSlider

