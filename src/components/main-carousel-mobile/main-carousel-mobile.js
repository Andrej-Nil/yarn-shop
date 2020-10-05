import React, {Component, createRef} from 'react';
import './main-carousel-mobile.scss'
import Link from "../link";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class MainCarouselMobile extends Component{
    state={
        slides: [
            {
                src: '/image/main-slides-mobile/anti-covid-m.jpg', href: '#!', id: 'slide1'
            },
            {
                src: '/image/main-slides-mobile/lana-gatto-m.jpg', href: '#!', id: 'slide2'
            },
            {
                src: '/image/main-slides-mobile/sale-nako-m.jpg', href: '#!', id: 'slide3'
            },

        ]
    };
    render() {
        const {slides} = this.state;

        const settings = {
            dots: true,
            dotsClass: 'main-carousel-m-dots',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 500,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            customPaging: i => (
                <div className='main-carousel-m-dots__item'/>
            )
        };

        function renderSlides(){
            return slides.map(({src, href,  id}) => {

                const img = <img src={src} alt=''/>;

                return (
                    <Link key={id} href={href}
                          cls=''
                          content={img}/>
                )
            })
        }
        const slidesItem = renderSlides();
        return (
            <div className='main-carousel-mobile'>
                <Slider {...settings}>
                    {slidesItem}
                </Slider>
            </div>
        )
    }
}
