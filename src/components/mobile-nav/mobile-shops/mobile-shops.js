import React, {Component} from "react";
import './mobile-shops.scss';
import Service from "../../../server";


export default class MobileShops extends Component {
    service = new Service();
    state = {
        shops: [],
        loading: true,
        error: false,
    };

    onShops = (shops) => {
        this.setState({
            shops,
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

    getShops() {
        this.service.getInfoOfShops()
            .then(this.onShops)
            .catch(this.onError)
    }

    componentDidMount() {
        this.getShops();
    }

    renderShop() {
        return this.state.shops.map( (shop) => {
            const {title, minLot, info, href, id} = shop;
            const address = info.address.item[0].value;
            return (
                <li key={id} className='mobile-shops__li shops-li'>
                    <a href={href} className='shops-li__link'>
                        <h4 className='shops-li__title'>{title}</h4>
                        <p className='shops-li__min-lot'>{minLot}</p>
                        <p className='shops-li__desc'>{address}</p>
                        <span className='fake-link'>Показать на карте</span>
                    </a>
                </li>
            )
        })
    }

    render() {
        const shops = this.renderShop();
        return (
            <ul className='mobile-shops-ul'>
                {shops}
            </ul>
        )
    }





};




