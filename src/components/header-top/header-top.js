import React from "react";
import './header-top.scss'
import HeaderLogo from "../header-logo";
import Link from "../link";
import HeaderTopNav from "../header-top-nav";
import HeaderTopShops from "../header-top-shops";

const left = (
    <div className='ht-left'>
        <HeaderLogo/>
        <div className="ht-shops-short-info">
            <Link
                cls='ht-shops-short-info__link'
                href={`#!`}
                content={`Наши адреса`}
            />
            <HeaderTopShops/>
        </div>
    </div>
);


const htPhone = (
    <div className='ht-phone'>
        <p className='ht-phones-title'>
            Оптовый склад:
        </p>
        <div className='ht-phones'>
            <Link
                cls='phone-link'
                href={`tel:+79920021184`}
                content={`+7 (992) 002-11-84`} />
            <Link
                cls='phone-link'
                href={`tel:+79923421184`}
                content={`+7 (992) 342-11-84`} />
        </div>



    </div>
);

const HeaderTop = () => {
    return (
        <div className='header-top ht'>
            <div className='container ht-inner'>
                {left}
                <HeaderTopNav/>
                {htPhone}
            </div>
        </div>
    )
};

export default HeaderTop;
