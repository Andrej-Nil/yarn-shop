import React, {Component}  from 'react';
import './app.scss';
import Header from "../header-components/header";
import MainCarousel from "../main-carousel";
import Brands from "../brands";
import ProductRow from "../product-row";

export default class App extends Component{
    render() {
        return (

            <div className='app'>
                <Header/>
                <MainCarousel/>
                <Brands/>
                <ProductRow title={'ЛИДЕРЫ ПРОДАЖ'}/>
            </div>
        )
    }
}
