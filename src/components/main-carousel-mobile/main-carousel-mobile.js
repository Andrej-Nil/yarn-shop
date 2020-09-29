import React, {Component, createRef} from 'react';
import './main-carousel-mobile.scss'
import Link from "../link";
import OwlCarousel from "react-owl-carousel2";

export default class MainCarouselMobile extends Component{
    constructor(props) {
        super(props);
        this.mainCarouselM = createRef();
    }
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

        const mainCarouselMOptions = {
            items: 1,
            rewind: true,
            autoplay: true,
            loop: true,
            dots: true,
            autoplayTimeout: 10000,
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
                <OwlCarousel ref={this.mainCarouselM} options={mainCarouselMOptions}>
                    {slidesItem}
                </OwlCarousel>
            </div>
        )
    }
}
