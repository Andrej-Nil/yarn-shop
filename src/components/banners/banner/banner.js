import React from "react";
import './banner.scss'
import Link from "../../link";

const Banner = ({banner}) => {
    function renderBanner() {
        return banner.map( (item) => {
            const {src, cls, id} = item;
            return (
                <img key={id} className={`banner__img ${cls}`} src={src} alt=''/>
            )
        })
    }

    const banners = renderBanner();
    return (
        <div className='banner mb container'>
           <Link href='#!' cls='' content={banners} />
        </div>
    )
};

export default Banner;
