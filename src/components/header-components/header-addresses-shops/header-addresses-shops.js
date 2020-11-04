import React, {Component} from "react";
import './header-addresses-shops.scss'
import HeaderShop from "../header-shop";
import Service from "../../../server";
import Spinner from "../../spinner";

export default class HeaderAddressesShops extends Component{
    service = new Service();
    state = {
        shops: [],
        loading: true,
        error: false,
    };

    componentDidMount() {
        this.getShops()
    }

    getShops() {
        this.service.getInfoOfShops()
            .then(this.onShops)
            .catch(this.onError)
    }

    onShops = (shops) => {
        this.setState({
            shops,
            loading: false,
        })
    };

    onError = (err) => {
        console.log(err);
        this.setState({
            loading: false,
            error: true,
        })
    };

    renderShops() {
        return this.state.shops.map( (shop) => {
            return (
                <HeaderShop key={shop.id} shop={shop}/>
            )
        })
    }


    render() {
        const {loading, error} = this.state;
        const hasData = !(loading || error);
        const spinner = loading ? <Spinner/> : null;
        const shops = hasData ? this.renderShops() : null;
        const errorMessage = error ? 'test' : null;
        return (
            <div className='header-addresses-shops'>
                {errorMessage}
                {spinner}
                {shops}
            </div>
        )
    }

};


