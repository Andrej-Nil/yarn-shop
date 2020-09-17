import React from "react";
import './banner-group-one.scss'

const BannerGroupOne = () => {
    const _baseSrc = 'image/banners/b-group-1/b-group-1-';
    const img1 = {src: _baseSrc + '1.jpg', alt: 'лето',
        desc: 'Подборка пряжи к летнему сезону.', id: 'summer'};
    const img2 = {src: _baseSrc + '2.jpg', alt: 'осень',
        desc: 'Подборка пряжи к осеннему сезону.', id: 'fall'};
    const img3 = {src: _baseSrc + '3.jpg', alt: 'весна',
        desc: 'Подборка пряжи к весеннему сезону.', id:'spring'};
    const img4 = {src: _baseSrc + '4.jpg', alt: 'зима',
        desc: 'Подборка пряжи к зимнему сезону.', id:'winter'};

    const BannerImg = ({img}) => {
        const {src, alt, desc} = img;
        return (
            <a href="#!" className="b-group-1-link">
                <img src={src} alt={alt}/>
                <p className='b-group-1-img__desc' >{desc}</p>
            </a>
        )
    };

    return (
        <div className='banner-group-one b-group-1 container'>
            <div className="b-group-1-inner">
                <div className='b-group-1-left'>
                    <BannerImg img={img1}/>
                </div>
                <div className='b-group-1-right '>

                    <div className='b-group-1-top'>
                        <BannerImg img={img2}/>
                    </div>
                    <div className='b-group-1-bottom'>
                        <div className='b-group-1-b-left'>
                            <p className='b-group-1__desc'>
                                Для каждого времяни года найдеться подходящая пряжа!
                            </p>
                            <div className='b-group-1-b-l-img'>
                                <BannerImg img={img3}/>
                            </div>

                        </div>
                        <div className='b-group-1-b-right'>
                            <BannerImg img={img4}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BannerGroupOne;
