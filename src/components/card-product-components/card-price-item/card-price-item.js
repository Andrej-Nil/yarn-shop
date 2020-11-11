import React from "react";
import './card-price-item.scss'
import PriceTypeDefinition from "../price-type-definition";

const CardPriceItem = ({type, cls, price, desc}) => {

    return (
        <div className="card-price-item">
            <div className="card-price-item__type">
                {type}
                <PriceTypeDefinition desc={desc}/>
            </div>
            <span className={`card-price ${cls}`}>{price} ₽</span>
        </div>
    )
};

export default CardPriceItem;
