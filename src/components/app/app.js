import React, {Component}  from 'react';
import './app.scss';
import Header from "../header-components/header";
import MainCarousel from "../main-carousel";
import Brands from "../brands";
import ProductRow from "../product-row";
import Banner from "../banner";
import Footer from "../footer-components/footer";
import BannerGroupOne from "../banner-group-one";

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
                <Footer/>
            </div>
        )
    }
}
