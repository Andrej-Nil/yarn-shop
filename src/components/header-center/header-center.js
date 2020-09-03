import React from "react";
import './header-center.scss'
import Link from "../link";
import Search from "../search";
import HeaderUserMenu from "../header-user-menu";

const HeaderCenter = () => {
    return (
        <div className="header-center hc">
            <div className='container hc-inner'>
                <Link
                    cls='hc-promo btn _redBtn'
                    href='#!'
                    content='Акции'
                />
                <Search/>

                <HeaderUserMenu/>
            </div>
        </div>
    )
};

export default HeaderCenter;
