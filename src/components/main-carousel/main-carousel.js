import React, {Component} from 'react';
import './main-carousel.scss';
import Link from "../link";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service from "../../server";

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
    service = new Service();
    state={
        slides: [],
        loading: true,
        error: false
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
        this.service.getMainCarouselSlides()
            .then(this.onSlides)
            .catch(this.onError)
    }

    render() {
        const {slides} = this.state;

        function renderSlides(){
            return slides.map(({image, href,  id}) => {

                const img = <img src={image} alt=''/>;

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
