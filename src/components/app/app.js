import React, {Component}  from 'react';
import './app.scss';
import Header from "../header";
import MainCarousel from "../main-carousel";

export default class App extends Component{
    render() {
        return (

            <div className='app'>
                <Header/>
                <MainCarousel/>
            </div>
        )
    }
}
