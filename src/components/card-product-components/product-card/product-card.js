import React from "react";
import './product-card.scss'
import Link from "../../link";
import CardDemo from "../card-demo";
import CardPriceItem from "../card-price-item";
const ProductCard = ({card}) => {

    const {src, href, title, brand, hrefBrand, price } = card;
    const wholesalePrice = price.toFixed(2);
    const retailPrice = (price * 1.3).toFixed(2);

    return (
        <div className="product-card-wrap">
            <div className='product-card'>

                <CardDemo title={title} src={src} href={href}/>

                <Link href={hrefBrand}
                      cls='product-card__brand'
                      content={brand} />

                <h3 className='product-card-title'>
                    <Link href={href}
                          content={title}/>
                </h3>

                <div className='card-price-wrap'>

                    <CardPriceItem
                        type={'Оптовая:'} isWholesale={true}
                        cls={'_bold-price'} price={wholesalePrice}/>

                    <CardPriceItem
                        type={'Розничная:'}  price={retailPrice}/>

                </div>
            </div>
        </div>
    )
};

export default ProductCard;
