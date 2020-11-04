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
import ServerPlug from "../../server-plug";
import Service from "../../server";
import MobileNavWrap from "../mobile-nav/mobile-nav-wrap";

export default class App extends Component{
	serverPlug = new ServerPlug();
	service = new Service();
	state = {
		banner1: {url: null, images:[]},
		banner2: {url: null, images:[]},
		isShowSearch: false,
		isMobileNavOpen: false,
		title: null
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

	isScroll(boolean){
		const body = document.querySelector('body');

		if(boolean) {
			setTimeout(()=>{
				body.classList.add('no-scroll')
			}, 200)
		} else {
			body.classList.remove('no-scroll')
		}
	}

	isOpenSearch = () => {
		this.setState({
			isShowSearch: !this.state.isShowSearch
		})
	};

	mobileNavOpen = () => {

		this.setState({
			isMobileNavOpen: !this.state.isMobileNavOpen
		});
	};


	render() {
		const {isShowSearch, isMobileNavOpen} = this.state;
		const banner1 = this.state.banner1;
		const banner2 = this.state.banner2;
		this.isScroll(this.state.isMobileNavOpen);
		return (
			<div className='app'>

				<Header
					isOpenSearch={this.isOpenSearch}
					mobileNavOpen={this.mobileNavOpen}
				/>
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
					isOpenSearch={this.isOpenSearch}
					isOpen={isShowSearch}/>

				<MobileNavWrap
					isMobileNavOpen={isMobileNavOpen}
					mobileNavOpen={this.mobileNavOpen}
				/>

			</div>

		)
	}
}
