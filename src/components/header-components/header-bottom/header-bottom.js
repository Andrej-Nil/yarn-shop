import React from "react";
import './header-bottom.scss'
import Catalog from "../catalog";
import HeaderNav from "../header-nav";
import HeaderMobileBottom from "../header-mobile-bottom";
const HeaderBottom = () => {
    return (
        <div className='header-bottom hb'>
            <div className='hb-inner container'>
                <Catalog/>
                <HeaderNav/>

            </div>
            <HeaderMobileBottom/>
        </div>
    )
};

export default HeaderBottom;
