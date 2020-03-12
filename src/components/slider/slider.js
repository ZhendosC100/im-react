import React, {Component} from 'react';
import Slider from 'react-slick';

import './slider.sass';

import slide11x from '../../assets/project_image_01@1x.jpg';
import slide12x from '../../assets/project_image_01@2x.jpg';
import slide21x from '../../assets/project_image_02@1x.jpg';
import slide22x from '../../assets/project_image_02@2x.jpg';
import slide31x from '../../assets/project_image_03@1x.jpg';
import slide32x from '../../assets/project_image_03@2x.jpg';

import toNextArrow from '../../assets/icon_next.svg';
import toPrevArrow from '../../assets/icon_prev.svg';

export default class SliderBox extends Component {

    render(){

        const SampleNextArrow = (props) => {
            const { onClick } = props;
            return (
              <div
                className="arrows__right"
                
                onClick={onClick}
              >
                  <img src={toNextArrow} alt="arrow"/>
              </div>
            );
          }
          
        const SamplePrevArrow = (props) => {
            const { onClick } = props;
            return (
              <div
                className="arrows__left"
                onClick={onClick}
              >
                <img src={toPrevArrow} alt="arrow"/>
              </div>
            );
          }

        const settings = {
            className: "slider variable-width",
            dots: false,
            arrows: true,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                breakpoint: 993,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                        focusOnSelect: false,
                }
                },
                {
                breakpoint: 700,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                        focusOnSelect: false,
                }
                },

                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false,
                        centerMode: false,
                        focusOnSelect: false,
                    }
                    }
                
            ],
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            
          };


        return(
            <section className="slider_box">

                <Slider {...settings}>
                    
                        <div className="slider__item">
                        <img className="slider__img" src={slide11x} srcSet={slide12x} alt="slider_image"/>
                        </div>
                        
                        <div className="slider__item">
                        <img className="slider__img" src={slide21x} srcSet={slide22x} alt="slider_image"/>
                        </div>
                        
                        <div className="slider__item">
                        <img className="slider__img" src={slide31x} srcSet={slide32x} alt="slider_image"/>
                        </div>

                </Slider>
                

            </section>
        )
    }
}