import React from "react";
import './header-addresses.scss';
import Link from "../../link";
import HeaderAddressesShops from "../header-addresses-shops";

const HeaderAddresses = () => {
    return (
        <div className="header-addresses">
            <div className="addresses-link-wrap">
                <Link
                    cls='addresses__link'
                    href={`#!`}
                    content={`Мы находимся`}/>
            </div>
            <HeaderAddressesShops/>
        </div>
    )
};

export default HeaderAddresses;
