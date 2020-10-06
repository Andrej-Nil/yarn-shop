import React, {Component} from 'react';
import './product-row.scss'
import ProductCard from "../card-product-components/product-card";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class ProductRow extends Component{
    state={
        leaders: [
            {
                src: '/image/leaders/puffy.png',
                href: '#!',
                title: 'Puffy',
                brand: 'Alize',
                hrefBrand: '#!',
                price: 544,
                id: 'puffy'
            },

            {
                src: '/image/leaders/jeans.png',
                href: '#!',
                title: 'Jeans',
                brand: 'YarnArt',
                hrefBrand: '#!',
                price: 632.00,
                id: 'jeans'
            },

            {
                src: '/image/leaders/children-novelty.png',
                href: '#!',
                title: 'Детская новинка',
                brand: 'Пехорка',
                hrefBrand: '#!',
                price: 340.00,
                id: 'children-novelty'
            },

            {
                src: '/image/leaders/masteritsa.png',
                href: '#!',
                title: 'Мастерица (нить для рукоделия)',
                brand: 'ИП ЛИСТВИН',
                hrefBrand: '#!',
                price: 170,
                id: 'masteritsa'
            },

            {
                src: '/image/leaders/village.png',
                href: '#!',
                brand: 'Троицкая',
                hrefBrand: '#!',
                title: 'Деревенька',
                price: 630,
                id: 'village'
            },
        ]
    };






    renderCard() {
        const { leaders } = this.state;
        return leaders.map( (card) => {
            return <ProductCard key={card.id} card={card}/>
        })
    }
    render() {
        const {title} = this.props;
        const cards = this.renderCard();
        const test = [
            {
                breakpoint: 1280,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true,
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 816,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 556,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            },
        ];
        const settings = {
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            responsive: test,

        };
        return (
            <section className='product-row mb'>
                <div className='bg__title'>
                <h2 className='product-row__title container'>
                    <a className='product-row__link' href='#!'>{title}</a>
                </h2>
                </div>


                <div className='product-row-item'>
                    <Slider {...settings}>
                        {cards}
                    </Slider>
                </div>

            </section>
        )
    }
}
