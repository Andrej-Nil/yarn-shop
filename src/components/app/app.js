import React, {Component}  from 'react';
import './app.scss';
import Header from "../header-components/header";
import Footer from "../footer-components/footer";
import SearchMobile from "../search-mobile";
import MobileNavWrap from "../mobile-nav/mobile-nav-wrap";
import HomePage from "../pages/home-page";

export default class App extends Component{
	state = {
		isShowSearch: false,
		isMobileNavOpen: false,
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

		this.isScroll(this.state.isMobileNavOpen);
		return (
			<div className='app'>
				<Header
					isOpenSearch={this.isOpenSearch}
					mobileNavOpen={this.mobileNavOpen}
				/>

				<HomePage/>


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
