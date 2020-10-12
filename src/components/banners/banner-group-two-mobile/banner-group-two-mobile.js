import React from "react";
import './banner-group-two-mobile.scss'
import BannerGroupImg from "../banner-group-img";

const _baseUrl = './image/banners/b-group-m-2/b-group-m-2';
const images = [
    {href: '#!', src: _baseUrl + '-1.jpg', alt: 'img1', desc: '"Coco"', cls: '', id: 'img1'},
    {href: '#!', src: _baseUrl + '-2.jpg', alt: 'img2', desc: '"My baby"', cls: '', id: 'img2'},
    {href: '#!', src: _baseUrl + '-3.jpg', alt: 'img3', desc: '"Хлопковый шнур 5мм"', cls: '_img-wrap-100', id: 'img3'},
    {href: '#!', src: _baseUrl + '-4.jpg', alt: 'img4', desc: '"Jeans"', cls: '', id: 'img4'},
    {href: '#!', src: _baseUrl + '-5.jpg', alt: 'img4', desc: 'Рафия', cls: '', id: 'img5'},
];

function renderImg() {
    return images.map( (img) => {
        return (
            <div key={img.id} className={`group-one-img-wrap ${img.cls}`}>
                <BannerGroupImg  img={img}/>
            </div>
        )
    })
}

const img = renderImg();

const BannerGroupTwoMobile = () => {
    return (
        <div className="banner-group-one-mobile">
            <div className='banner-group-one-mobile'>

                <h3 className="group-mobile__title">Мир, где каждую идею можно воплотить руками!</h3>
                <div className="group-one-mobile__images">
                    {img}
                </div>

            </div>
        </div>
    )
};

export default BannerGroupTwoMobile;
