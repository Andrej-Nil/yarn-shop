import React, {Component}  from 'react';
import Service from "../../../server";
import MainCarousel from "../../main-carousel";
import MainCarouselMobile from "../../main-carousel-mobile";
import Brands from "../../brands";
import ProductRow from "../../product-row";
import Banner from "../../banners/banner";
import BannerGroupOne from "../../banners/banner-group-one";
import BannerGroupOneMobile from "../../banners/banner-group-one-mobile";
import BannerGroupTwo from "../../banners/banner-group-two";
import BannerGroupTwoMobile from "../../banners/banner-group-two-mobile";

export default class HomePage extends Component{
    service = new Service();
    state = {
        banner1: {url: null, images:[]},
        banner2: {url: null, images:[]}
    };

    componentDidMount() {
        this.service.getBanner(1)
            .then( banner => {
                this.setState({
                    banner1: banner
                })
            }).catch((e) => console.log(e));

        this.service.getBanner(2)
            .then( banner => {
                this.setState({
                    banner2: banner
                })
            }).catch((e) => console.log(e));
    };
    render() {

        const {banner1, banner2} = this.state;
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}
