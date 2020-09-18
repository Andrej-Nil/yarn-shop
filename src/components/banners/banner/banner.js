import React from "react";
import './banner.scss'
import Link from "../../link";

const Banner = () => {
    const src = './image/banners/banner-1.jpg';
    const banner = <img className='banner__img' src={src} alt=''/>;
    return (
        <div className='banner container'>
           <Link href='#!' cls='' content={banner} />
        </div>
    )
};

export default Banner;
