import React from "react";
import './card-demo.scss'

const CardDemo = ({title, src}) => {
    return (
        <div className='card-product-demo'>

            <div className='product-img-wrap'>
                <img className='product__img' src={src} alt={title}/>
            </div>
            <h3 className='product__title'>{title}</h3>
        </div>
    )
};

export default CardDemo;
