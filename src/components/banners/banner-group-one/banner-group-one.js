import React from "react";
import './banner-group-one.scss'
import BannerGroupImg from "../banner-group-img";

const BannerGroupOne = () => {
    const _baseSrc = 'image/banners/b-group-1/b-group-1-';
    const img1 = {href: '#!', src: _baseSrc + '1.jpg', alt: 'лето',
        desc: 'Подборка пряжи к летнему сезону.', id: 'summer'};
    const img2 = {href: '#!', src: _baseSrc + '2.jpg', alt: 'осень',
        desc: 'Подборка пряжи к осеннему сезону.', id: 'fall'};
    const img3 = {href: '#!', src: _baseSrc + '3.jpg', alt: 'весна',
        desc: 'Подборка пряжи к весеннему сезону.', id:'spring'};
    const img4 = {href: '#!', src: _baseSrc + '4.jpg', alt: 'зима',
        desc: 'Подборка пряжи к зимнему сезону.', id:'winter'};



    return (
        <div className='banner-group-one b-group-1 container'>
            <div className="b-group-1-inner">
                <div className='b-group-1-img1'>
                    <BannerGroupImg img={img1}/>
                </div>
                <div className='b-group-1-right '>

                    <div className='b-group-1-img2'>
                        <BannerGroupImg img={img2}/>
                    </div>
                    <div className='b-group-1-bottom'>
                        <div className='b-group-1-b-left'>

                            <p className='b-group-1__desc'>
                                Для каждого времяни года найдеться подходящая пряжа!
                            </p>
                            <div className='b-group-1-b-img3'>
                                <BannerGroupImg img={img3}/>
                            </div>

                        </div>
                        <div className='b-group-1-img4'>
                            <BannerGroupImg img={img4}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BannerGroupOne;
