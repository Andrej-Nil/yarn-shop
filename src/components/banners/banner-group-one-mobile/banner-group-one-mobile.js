import React from "react";
import './banner-group-one-mobile.scss'
import BannerGroupImg from "../banner-group-img";

const _baseUrl = './image/banners/b-group-m-1/b-group-m-1';
const images = [
    {href: '#!', src: _baseUrl + '-1.jpg', alt: 'img1', desc: 'Летняя подборка.', id: 'img1'},
    {href: '#!', src: _baseUrl + '-2.jpg', alt: 'img2', desc: 'Осенняя подборка.', id: 'img2'},
    {href: '#!', src: _baseUrl + '-3.jpg', alt: 'img3', desc: 'Зимная подборка.', id: 'img3'},
    {href: '#!', src: _baseUrl + '-4.jpg', alt: 'img4', desc: 'Весенняя подборка.', id: 'img4'},
];

function renderImg() {
    return images.map( (img) => {
        return (
            <div key={img.id} className='img-wrap'>
                <BannerGroupImg  img={img}/>
            </div>
        )
    })
}
const img = renderImg();
const BannerGroupOneMobile = () => {
    return (

        <div className='banner-group-one-mobile'>
            <h3 className="group-one-mobile__title">Для каждого времяни года найдеться подходящая пряжа!</h3>
            <div className="group-one-mobile__images">
                {img}
            </div>

        </div>
    )
};

export default BannerGroupOneMobile;
