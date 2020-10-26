import React from "react";
import './menu-mobile-icon.scss'

const MenuMobileIcon = ({mobileNavOpen}) => {
    return (
        <i
            onClick={mobileNavOpen}
            className='menu-mobile-icon'/>

    )
};

export default MenuMobileIcon;
