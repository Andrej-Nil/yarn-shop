import React from "react";
import './header-shop.scss'
import HeaderShopItem from "../header-shop-item";
import Link from "../../link";

const HeaderShop = ({shop}) => {
    const {title, desc, href, info} = shop;
    function renderInfo() {
        return info.map( (item)=> {
            return <HeaderShopItem key={item.id}  info={item} />
        })
    }
    const items = renderInfo();

    return (
        <div className="header-shop">
            <h3 className='header-shop__title'>{title}</h3>
            <p className='header-shop__desc'>{desc}</p>
            {items}
            <Link href={href} cls='header-shop__link'
                  content='Показать на карте' />
        </div>
    )
};

export default HeaderShop;
