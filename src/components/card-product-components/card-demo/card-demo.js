import React from "react";
import './card-demo.scss'
import Link from "../../link";

const CardDemo = ({title, src, href}) => {
    const img = <img className='product__img' src={src} alt={title}/>;
    return (
        <div className='card-product-demo'>

            <div className='product-img-wrap'>
                <Link href={href} content={img}/>
            </div>
        </div>
    )
};

export default CardDemo;
