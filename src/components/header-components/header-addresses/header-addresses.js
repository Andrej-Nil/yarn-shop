import React from "react";
import './header-addresses.scss';
import Link from "../../link";
import HeaderAddressesShops from "../header-addresses-shops";

const HeaderAddresses = () => {
    return (
        <div className="header-addresses">
            <Link
            cls='header-addresses__link'
            href={`#!`}
            content={`Мы находимся`}
        />
            <HeaderAddressesShops/>
        </div>
    )
};

export default HeaderAddresses;
