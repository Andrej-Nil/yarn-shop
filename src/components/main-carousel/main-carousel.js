import React, {Component} from 'react';
import './main-carousel.scss';
import Link from "../link";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const {onClick } = props;
    return (
        <span onClick={onClick} className={`main-carousel-nav__arrow _slider-next`}/>
    );
}

function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
            <span onClick={onClick} className={`main-carousel-nav__arrow _slider-prev`}/>
    );
}


export default class MainCarousel extends Component{
    state={
        slides: [
            {
                src: '/image/main-slides/anti-covid.jpg', href: '#!', id: 'slide1'
            },
            {
                src: '/image/main-slides/lana-gatto.jpg', href: '#!', id: 'slide2'
            },
            {
                src: '/image/main-slides/sale-nako.jpg', href: '#!', id: 'slide3'
            },

        ]
    };

    render() {
        const {slides} = this.state;

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

        const settings = {
            infinite: true,
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 500,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
        };


        const slidesItem = renderSlides();
        return (
            <div className='main-carousel container'>
                <Slider {...settings}>
                    {slidesItem}
                </Slider>

            </div>
        )
    }
}
