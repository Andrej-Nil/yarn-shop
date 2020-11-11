import React from "react";
import './product-card.scss'
import Link from "../../link";
import CardDemo from "../card-demo";
import CardPriceItem from "../card-price-item";

const ProductCard = ({card}) => {

    const {src, href, title, brand, hrefBrand, price } = card;
    const wholesalePrice = price.toFixed(2);
    const retailPrice = (price * 1.3).toFixed(2);
    const wholesalePriceDesc = 'Цена товара при закупки от 5 000 рублей. Расчет суммы идет исхотя из оптовой цены товара.';
    const retailPriceDesc = 'Цена товара при закупки менее 5 000 рублей. Розничная цена выше оптовой на 30%';

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
                        type={'Оптовая:'}
                        desc={wholesalePriceDesc}
                        cls={'_bold-price'}
                        price={wholesalePrice}/>

                    <CardPriceItem
                        type={'Розничная:'}
                        desc={retailPriceDesc}
                        price={retailPrice}/>

                </div>
            </div>
        </div>
    )
};

export default ProductCard;
