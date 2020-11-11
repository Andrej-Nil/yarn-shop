import React from "react";
import './banner-group-img.scss'

const BannerGroupImg = ({banner}) => {
    const {url, img, desc} = banner;
    return (
        <a href={url} className="banner-group-link">

            <img className='banner-group__img'  src={img} alt={desc}/>
            <p className='banner-group__desc' >{desc}</p>
        </a>
    )
};

export default BannerGroupImg;
