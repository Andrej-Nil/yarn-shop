import React, {Component}  from 'react';
import './product-row.scss'
import ProductCard from "../card-product-components/product-card";

export default class ProductRow extends Component{
    state={
        leaders: [
            {
                src: '/image/leaders/puffy.png',
                href: '#!',
                title: 'Puffy',
                price: 544,
                id: 'puffy'
            },

            {
                src: '/image/leaders/jeans.png',
                href: '#!',
                title: 'Jeans',
                price: 632.00,
                id: 'jeans'
            },

            {
                src: '/image/leaders/children-novelty.png',
                href: '#!',
                title: 'Детская новинка',
                price: 340.00,
                id: 'children-novelty'
            },

            {
                src: '/image/leaders/masteritsa.png',
                href: '#!',
                title: 'Мастерица (нить для рукоделия)',
                price: 170,
                id: 'masteritsa'
            },

            {
                src: '/image/leaders/village.png',
                href: '#!',
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
        return (
            <section className='product-row container'>
                <h2 className='product-row__title'>{title}</h2>
                <div className='product-row-item'>
                    {cards}
                </div>

            </section>
        )
    }
}
