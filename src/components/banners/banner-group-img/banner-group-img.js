import React from "react";
import './banner-group-img.scss'

const BannerGroupImg = ({img}) => {
    const {href, src, alt, desc} = img;
    return (
        <a href={href} className="banner-group-link">

            <img className='banner-group__img'  src={src} alt={alt}/>
            <p className='banner-group__desc' >{desc}</p>

        </a>
    )
};

export default BannerGroupImg;
