import React from "react";
import './header-user-menu-item.scss'

const HeaderUserMenuItem = ({item}) => {
    const {href, icon, label} = item;
    return (
            <a href={href} className='header-user-menu-item'>
                <i className={`h-user-menu__icon ${icon}`}/>
                <span className='h-user-menu__label' >
                    {label}
                </span>
            </a>
    )
};

export default HeaderUserMenuItem;
