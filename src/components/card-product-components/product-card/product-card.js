import React from "react";
import './product-card.scss'
import Link from "../../link";
import CardDemo from "../card-demo";
import CardPriceItem from "../card-price-item";
const ProductCard = ({card}) => {

    const {src, href, title, price } = card;
    const wholesalePrice = price.toFixed(2);
    const retailPrice = (price * 1.3).toFixed(2);

    return (
        <div className='product-card'>

            <Link href={href}
                  content={<CardDemo title={title} src={src}/>}/>

            <div className='card-price-wrap'>

                <CardPriceItem
                    type={'Оптовая:'} isWholesale={true}
                    cls={'_bold-price'} price={wholesalePrice}/>

                <CardPriceItem
                    type={'Розничная:'}  price={retailPrice}/>

            </div>
        </div>
    )
};

export default ProductCard;
