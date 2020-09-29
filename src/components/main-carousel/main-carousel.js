import React, {Component, createRef} from 'react';
import './main-carousel.scss';
import Link from "../link";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

export default class MainCarousel extends Component{
    constructor(props) {
        super(props);
        this.mainCarousel = createRef();
    }
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

        const mainCarouselOptions = {
            items: 1,
            rewind: true,
            autoplay: true,
            loop: true,
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
            <div className='main-carousel container'>
                <OwlCarousel ref={this.mainCarousel} options={mainCarouselOptions}>
                    {slidesItem}
                </OwlCarousel>
                <div className='main-carousel-nav'>
                    <span
                        onClick={() => this.mainCarousel.current.prev()}
                        className="main-carousel-nav__arrow _slider-prev"/>

                    <span
                        onClick={() => this.mainCarousel.current.next()}
                        className="main-carousel-nav__arrow _slider-next"/>
                </div>



            </div>
        )
    }
}
