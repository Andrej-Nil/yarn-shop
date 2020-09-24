import React from "react";
import './header-top.scss'
import HeaderLogo from "../header-logo";
import HeaderTopNav from "../header-top-nav";
import HeaderAddresses from "../header-addresses";
import HeaderPhones from "../header-phones";
import MenuMobileIcon from "../menu-mobile-icon";



const HeaderTop = () => {
    return (
        <div className='header-top ht'>
            <div className='container ht-inner'>
                <div className='ht-left'>
                    <HeaderLogo/>
                    <HeaderAddresses/>
                </div>
                <HeaderTopNav/>
                <HeaderPhones/>
                <MenuMobileIcon/>
            </div>
        </div>
    )
};

export default HeaderTop;
