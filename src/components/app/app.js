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

export default class App extends Component{
    render() {
        return (

            <div className='app'>

                <Header/>
                <MainCarousel/>
                <Brands/>
                <ProductRow title={'ЛИДЕРЫ ПРОДАЖ'}/>
                <Banner/>
                <ProductRow title={'РАСПРОДАЖА'}/>
                <BannerGroupOne/>
                <ProductRow title={'НОВИНКИ'}/>
                <BannerGroupTwo/>
                <Footer/>
            </div>
        )
    }
}
