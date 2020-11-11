import React, {Component} from "react";
import './banner-group-two-mobile.scss'
import BannerGroupImg from "../banner-group-img";
import Service from "../../../server";


export default class BannerGroupTwoMobile extends Component {

    service = new Service();
    state = {
        bannerGroup: [],
        loading: true,
        error: false
    };

    onBannerGroup = (bannerGroup) => {
        this.setState({
            bannerGroup,
            loading: false
        })
    };

    onError = (err) => {
        console.log(err);
        this.setState({
            error: true,
            loading: false
        })
    };

    getBannerGroup() {
        this.service.getBanner('-group-mobile-2')
            .then(this.onBannerGroup)
            .catch(this.onError)
    }

    componentDidMount() {
        this.getBannerGroup()
    }

    renderImg() {
        const {bannerGroup} = this.state;
        return bannerGroup.map( (banner) => {
            const width100 = banner.width === 'full' ? '_img-wrap-100' : "";
            return (
                <div key={banner.id} className={`group-one-img-wrap ${width100}`}>
                    <BannerGroupImg  banner={banner}/>
                </div>
            )
        })
    }

    render() {
        const banners = this.renderImg();
        return (
            <div className="banner-group-one-mobile">
                <div className='banner-group-one-mobile'>

                    <h3 className="group-mobile__title">Мир, где каждую идею можно воплотить руками!</h3>
                    <div className="group-one-mobile__images">
                        {banners}
                    </div>

                </div>
            </div>
        )
    }

};


