import React from "react";
import './header-shop.scss'
import HeaderShopInfo from "../header-shop-item";
import Link from "../../link";

const HeaderShop = ({shop}) => {
    const {href, title, minLot, info} = shop;

    function renderInfo() {
        return Object.keys(info).map((item) => {
             return <HeaderShopInfo key={info[item].id} info={info[item]} />
        })

    }
    const items = renderInfo();

    return (
        <div className="header-shop">
            <h3 className='header-shop__title'>{title}</h3>
            <p className='header-shop__desc'>{minLot}</p>

            <div className="header-shop-info-wrap">
                {items}
            </div>


            <Link href={href} cls='header-shop__link'
                  content='Показать на карте' />
        </div>
    )
};

export default HeaderShop;
