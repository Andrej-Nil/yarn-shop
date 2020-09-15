import React from "react";
import './header-bottom.scss'
import Catalog from "../catalog";
import HeaderNav from "../header-nav";
const HeaderBottom = () => {
    return (
        <div className='header-bottom hb'>
            <div className='hb-inner container'>
                <Catalog/>
                <HeaderNav/>
            </div>

        </div>
    )
};

export default HeaderBottom;
