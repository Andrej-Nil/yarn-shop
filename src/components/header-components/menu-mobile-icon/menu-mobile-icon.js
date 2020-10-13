import React from "react";
import './menu-mobile-icon.scss'

const MenuMobileIcon = ({isOpenNav}) => {
    return (
        <i
            onClick={isOpenNav}
            className='menu-mobile-icon'/>

    )
};

export default MenuMobileIcon;
