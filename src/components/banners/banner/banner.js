import React from "react";
import './banner.scss'
import Link from "../../link";

const Banner = ({banner}) => {
    const {url, images} = banner;
    function renderBanner() {
        return images.map( (item) => {
            const {src, size, id} = item;
            return (
                <img key={id} className={`banner__img ${size}`} src={src} alt=''/>
            )
        })
    }
    const banners = renderBanner();
    return (
        <div className='banner mb container'>
           <Link href={url} cls='' content={banners} />
        </div>
    )
};

export default Banner;
