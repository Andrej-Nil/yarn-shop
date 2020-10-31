import React, {Component} from "react";
import './header-center.scss'
import Link from "../../link";
import HeaderUserMenu from "../header-user-menu";
import SearchMobileIcon from "../search-mobile-icon";
import HeaderSearch from "../header-search";

export default class HeaderCenter  extends Component{

    render(){
        const {isOpenSearch} = this.props;
        return (
            <div className="header-center hc">
                <div className='container hc-inner'>
                    <Link
                        cls='hc__promo btn _redBtn'
                        href='#!'
                        content='Акции'
                    />

                    <Link
                        cls='catalog__mobile btn'
                        href='#!'
                        content='Каталог'
                    />

                    <HeaderSearch/>



                    <div className='search-mobile-icon-wrap'>
                        <SearchMobileIcon isOpenSearch={isOpenSearch}/>
                    </div>

                    <HeaderUserMenu/>
                </div>
            </div>
        )
    }

};


