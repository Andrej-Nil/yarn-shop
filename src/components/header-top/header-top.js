import React from "react";
import './header-top.scss'
import HeaderLogo from "../header-logo";
import Link from "../link";

const left = (
    <div className='ht-left'>
        <HeaderLogo/>
        <span className='ht-address'>г.Екатеринбург, ул.8-Марта 207, стр. 6</span>
    </div>
);

const right = (
    <div className='ht-right'>
        <div className='ht-phones'>
            <h3 className='ht-phones-title'>Наши телефоны:</h3>
            <Link
                cls='phone-link'
                href={`tel:+79920021184`}
                content={`+7 (992) 002-11-84`} />
            <Link
                cls='phone-link'
                href={`tel:+79923421184`}
                content={`+7 (992) 342-11-84`} />
        </div>

        <nav className='ht-nav'>

        </nav>
    </div>
);

const HeaderTop = () => {
    return (
        <div className='header-top ht'>
            <div className='container ht-inner'>
                {left}
                {right}
            </div>
        </div>
    )
};

export default HeaderTop;
