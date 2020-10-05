import React, {Component}  from 'react';
import './app.scss';
import Header from "../header-components/header";
import MainCarousel from "../main-carousel";
import Brands from "../brands";
import ProductRow from "../product-row";
import Banner from "../banners/banner";
import Footer from "../footer-components/footer";
import BannerGroupOne from "../banners/banner-group-one";
import BannerGroupTwo from "../banners/banner-group-two";
import MainCarouselMobile from "../main-carousel-mobile";



export default class App extends Component{

    render() {

        const BannerSrc1 = './image/banners/banner-1.jpg';
        const BannerSrc2 = './image/banners/banner-2.jpg';
        return (

            <div className='app'>

                <Header/>
                <MainCarousel/>
                <MainCarouselMobile/>
                <Brands/>
                <ProductRow title={'ЛИДЕРЫ ПРОДАЖ'}/>
                {/*<Banner src={BannerSrc1}/>*/}
                <ProductRow title={'РАСПРОДАЖА'}/>
                {/*<Banner src={BannerSrc2}/>*/}
                {/*<BannerGroupOne/>*/}
                <ProductRow title={'НОВИНКИ'}/>
                {/*<BannerGroupTwo/>*/}
                {/*<Footer/>*/}
            </div>

        )
    }
}
