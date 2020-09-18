import React from "react";
import './banner-group-two.scss'
import BannerGroupImg from "../banner-group-img";

const BannerGroupTwo = () => {
    const _baseSrc = 'image/banners/b-group-2/b-group-2-';
    const img1 = {href: '#!', src: _baseSrc + 'l1.jpg', alt: 'img1', desc: 'Для изготовления поробуйте "Saltera".', id: 'img1'};

    const img2 = {href: '#!', src: _baseSrc + 'l2.jpg', alt: 'img2', desc: 'Для изготовления поробуйте "Мастерица".', id: 'img2'};

    const img3 = {href: '#!', src: _baseSrc + 'l3.jpg', alt: 'img3', desc: 'Для изготовления поробуйте "Хлопковый шнур 5мм".', id: 'img3'};

    const img4 = {href: '#!', src: _baseSrc + 'l4.jpg', alt: 'img4', desc: 'Для изготовления поробуйте "Рафия".', id: 'img4'};

    const img5 = {href: '#!', src: _baseSrc + 'r1.jpg', alt: 'img5', desc: 'Для изготовления поробуйте "My baby".', id: 'img5'};

    const img6 = {href: '#!', src: _baseSrc + 'r2.jpg', alt: 'img6', desc: 'Для изготовления поробуйте "Coco".', id: 'img6'};

    const img7 = {href: '#!', src: _baseSrc + 'r3.jpg', alt: 'img7', desc: 'Для изготовления поробуйте "Bella".', id: 'img7'};

    const img8 = {href: '#!', src: _baseSrc + 'r4.jpg', alt: 'img8', desc: 'Для изготовления поробуйте "Jeans".', id: 'img8'};

    return (
       <div className='banner-group-two b-group-2 container'>
            <div className="b-group-2-inner">
                <div className="b-group-2-left">
                    <div className="b-group-2-l-top">
                        <div className="b-group-2-l-img1">
                            <BannerGroupImg img={img1}/>
                        </div>
                        <div className="b-group-2-l-img2">
                            <BannerGroupImg img={img2}/>
                        </div>
                    </div>

                    <div className='b-group-desc'>
                        <p className='b-group-desc__item'>Этот необьятный мир вязаных вещей!</p>
                        <p className='b-group-desc__item'>Мир, где каждую идею можно воплотить руками!</p>
                    </div>

                    <div className="b-group-2-l-bottom">
                        <div className="b-group-2-l-img3">
                            <BannerGroupImg img={img3}/>
                        </div>
                        <div className="b-group-2-l-img4">
                            <BannerGroupImg img={img4}/>
                        </div>
                    </div>
                </div>

                <div className="b-group-2-right">
                    <div className="b-group-2-col1">
                        <div className="b-group-2-l-img5">
                            <BannerGroupImg img={img5}/>
                        </div>
                        <div className="b-group-2-l-img6">
                            <BannerGroupImg img={img6}/>
                        </div>
                    </div>
                    <div className="b-group-2-col2">
                        <div className="b-group-2-l-img7">
                            <BannerGroupImg img={img7}/>
                        </div>
                        <div className="b-group-2-l-img8">
                            <BannerGroupImg img={img8}/>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
};

export default BannerGroupTwo;
