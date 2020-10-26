import React from "react";
import './header-addresses-shops.scss'
import HeaderShop from "../header-shop";
import ServerPlug from "../../../server-plug";

const serverPlug = new ServerPlug();

const shops = serverPlug.shops;
function renderShops() {
    return shops.map((shop) => {
        return (
            <HeaderShop key={shop.id} shop={shop}/>
        )
    })
}

const shopsElement = renderShops();


const HeaderAddressesShops = () => {
    return (
        <div className='header-addresses-shops'>
            {shopsElement}
        </div>
    )
};

export default HeaderAddressesShops;
