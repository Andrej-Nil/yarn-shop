import React, {Component} from 'react';
import './main-carousel-mobile.scss'
import Link from "../link";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service from "../../server";

export default class MainCarouselMobile extends Component{
    service = new Service();
    state={
        slides: []
    };

    onSlides = (slides) => {
        this.setState({
            slides,
            loading: false
        })
    };

    onError = (err) => {
        console.log(err);
        this.setState({
            error: true,
            loading: false
        })
    };

    componentDidMount() {
        this.service.getMainCarouselMobileSlides()
            .then(this.onSlides)
            .catch(this.onError)
    }
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
            customPaging: () => (
                <div className='main-carousel-m-dots__item'/>
            )
        };

        function renderSlides(){
            return slides.map(({img, url,  id}) => {

                const image = <img src={img} alt=''/>;

                return (
                    <Link key={id} href={url}
                          cls=''
                          content={image}/>
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
