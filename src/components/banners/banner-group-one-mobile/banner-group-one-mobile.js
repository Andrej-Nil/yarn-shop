import React, {Component} from "react";
import './banner-group-one-mobile.scss'
import BannerGroupImg from "../banner-group-img";
import Service from "../../../server";

export default class BannerGroupOneMobile extends Component {
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
        this.service.getBanner('-group-mobile-1')
            .then(this.onBannerGroup)
            .catch(this.onError)
    }

    componentDidMount() {
        this.getBannerGroup()
    }
    renderImg() {
        const {bannerGroup} = this.state;
        return bannerGroup.map( (img) => {
            return (
                <div key={img.id} className='group-one-img-wrap'>
                    <BannerGroupImg  banner={img}/>
                </div>
            )
        })
    }
    render() {

        const img = this.renderImg();
        return (

            <div className='banner-group-one-mobile'>
                <h3 className="group-mobile__title">Для каждого времяни года найдеться подходящая пряжа!</h3>
                <div className="group-one-mobile__images">
                    {img}
                </div>
            </div>
        )
    }
};
