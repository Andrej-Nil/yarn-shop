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
import BannerGroupOneMobile from "../banners/banner-group-one-mobile";
import BannerGroupTwoMobile from "../banners/banner-group-two-mobile";
import SearchMobile from "../search-mobile";



export default class App extends Component{

    state = {
       isSearchOpen: false
    };

    searchChange = () => {
        this.setState({
            isSearchOpen: !this.state.isSearchOpen
        })
    };
    render() {
        const {isSearchOpen} = this.state;
        const _bannerBaseApi = './image/banners/banner';
        const banner1 = [
            {src: `${_bannerBaseApi}-1.jpg`, cls: '_desktop', id: 'desktop' },
            {src: `${_bannerBaseApi}-1-middle.jpg`, cls: '_middle', id: 'middle' },
            {src: `${_bannerBaseApi}-1-small.jpg`, cls: '_small', id: 'small' },
            {src: `${_bannerBaseApi}-1-tiny.jpg`, cls: '_tiny', id: 'tiny' },
        ];

        const banner2 = [
            {src: `${_bannerBaseApi}-2.jpg`, cls: '_desktop', id: 'desktop' },
            {src: `${_bannerBaseApi}-2-middle.jpg`, cls: '_middle', id: 'middle' },
            {src: `${_bannerBaseApi}-2-small.jpg`, cls: '_small', id: 'small' },
            {src: `${_bannerBaseApi}-2-tiny.jpg`, cls: '_tiny', id: 'tiny' },
        ];
        return (

            <div className='app'>

                <Header searchChange={this.searchChange}/>
                <MainCarousel/>
                <MainCarouselMobile/>
                <Brands/>
                <ProductRow title={'ЛИДЕРЫ ПРОДАЖ'}/>
                <Banner banner={banner1}/>
                <ProductRow title={'РАСПРОДАЖА'}/>
                <Banner banner={banner2}/>
                <BannerGroupOne/>
                <BannerGroupOneMobile/>
                <ProductRow title={'НОВИНКИ'}/>
                <BannerGroupTwo/>
                <BannerGroupTwoMobile/>
                <Footer/>
                <SearchMobile
                    searchChange={this.searchChange}
                    isOpen={isSearchOpen}/>
            </div>

        )
    }
}
