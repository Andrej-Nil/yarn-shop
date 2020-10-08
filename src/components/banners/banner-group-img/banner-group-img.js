import React from "react";
import './banner-group-img.scss'

const BannerGroupImg = ({img}) => {
    const {href, src, alt, desc} = img;
    return (
        <a href={href} className="banner-group-link">
            <p className='banner-group__desc' >{desc}</p>
            <img className='banner-group__img'  src={src} alt={alt}/>

        </a>
    )
};

export default BannerGroupImg;
