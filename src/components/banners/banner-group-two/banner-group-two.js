import React, {Component} from "react";
import './banner-group-two.scss'
import BannerGroupImg from "../banner-group-img";
import Service from "../../../server";

export default class BannerGroupTwo extends Component {
    service = new Service();
    state = {
        banner1: {},
        banner2: {},
        banner3: {},
        banner4: {},
        banner5: {},
        banner6: {},
        banner7: {},
        banner8: {},
        loading: true,
        error: false
    };

    onBannerGroup = (bannerGroup) => {
        this.setState({
            banner1: bannerGroup[0],
            banner2: bannerGroup[1],
            banner3: bannerGroup[2],
            banner4: bannerGroup[3],
            banner5: bannerGroup[4],
            banner6: bannerGroup[5],
            banner7: bannerGroup[6],
            banner8: bannerGroup[7],
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
        this.service.getBanner('-group-2')
            .then(this.onBannerGroup)
            .catch(this.onError)
    }

    componentDidMount() {
        this.getBannerGroup()
    }
    render() {
        const {banner1, banner2, banner3, banner4,
            banner5, banner6, banner7, banner8} = this.state;
        return (
            <div className='banner-group-two mb b-group-2 container'>
                <div className="b-group-2-inner">
                    <div className="b-group-2-left">
                        <div className="b-group-2-l-top">
                            <div className="b-group-2-l-img1">
                                <BannerGroupImg banner={banner1}/>
                            </div>
                            <div className="b-group-2-l-img2">
                                <BannerGroupImg banner={banner2}/>
                            </div>
                        </div>

                        <div className='b-group-desc'>
                            <p className='b-group-desc__item'>Этот необьятный мир вязаных вещей!</p>
                            <p className='b-group-desc__item'>Мир, где каждую идею можно воплотить руками!</p>
                        </div>

                        <div className="b-group-2-l-bottom">
                            <div className="b-group-2-l-img3">
                                <BannerGroupImg banner={banner3}/>
                            </div>
                            <div className="b-group-2-l-img4">
                                <BannerGroupImg banner={banner4}/>
                            </div>
                        </div>
                    </div>

                    <div className="b-group-2-right">
                        <div className="b-group-2-col1">
                            <div className="b-group-2-l-img5">
                                <BannerGroupImg banner={banner5}/>
                            </div>
                            <div className="b-group-2-l-img6">
                                <BannerGroupImg banner={banner6}/>
                            </div>
                        </div>
                        <div className="b-group-2-col2">
                            <div className="b-group-2-l-img7">
                                <BannerGroupImg banner={banner7}/>
                            </div>
                            <div className="b-group-2-l-img8">
                                <BannerGroupImg banner={banner8}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


