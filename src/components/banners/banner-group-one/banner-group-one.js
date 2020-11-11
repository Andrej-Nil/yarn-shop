import React, {Component} from "react";
import './banner-group-one.scss'
import Service from "../../../server";
import BannerGroupImg from "../banner-group-img";

export default class BannerGroupOne extends Component{
    service = new Service();
    state = {
        banner1: {},
        banner2: {},
        banner3: {},
        banner4: {},
        loading: true,
        error: false
    };

    onBannerGroup = (bannerGroup) => {
        this.setState({
            banner1: bannerGroup[0],
            banner2: bannerGroup[1],
            banner3: bannerGroup[2],
            banner4: bannerGroup[3],
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
        this.service.getBanner('-group-1')
            .then(this.onBannerGroup)
            .catch(this.onError)
    }

    componentDidMount() {
        this.getBannerGroup()
    }

    render() {
        const {banner1, banner2, banner3, banner4} = this.state;

        return (
            <div className='banner-group-one mb b-group-1 container'>
                <div className="b-group-1-inner">
                    <div className='b-group-1-img1'>
                        <BannerGroupImg banner={banner1}/>
                    </div>
                    <div className='b-group-1-right '>

                        <div className='b-group-1-img2'>
                            <BannerGroupImg banner={banner2}/>
                        </div>
                        <div className='b-group-1-bottom'>
                            <div className='b-group-1-b-left'>

                                <p className='b-group-1__desc'>
                                    Для каждого времяни года найдеться подходящая пряжа!
                                </p>
                                <div className='b-group-1-b-img3'>
                                    <BannerGroupImg banner={banner3}/>
                                </div>

                            </div>
                            <div className='b-group-1-img4'>
                                <BannerGroupImg banner={banner4}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};


