import React from "react";
import './banner.scss'
import Link from "../../link";

const Banner = ({src}) => {

    const banner = <img className='banner__img' src={src} alt=''/>;
    return (
        <div className='banner container'>
           <Link href='#!' cls='' content={banner} />
        </div>
    )
};

export default Banner;
