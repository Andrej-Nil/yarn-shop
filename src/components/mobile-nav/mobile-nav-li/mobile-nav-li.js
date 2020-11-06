import React from "react";
import './mobile-nav-li.scss'

const MobileNavLi = ({item, label, submenu, submenuOpen}) => {
    const {url, cls, id} = item;
    if(submenu){
        return (
            <li className='menu-mobile-li'>
            <span
                onClick={ () => submenuOpen(id)}
                className={`menu-mobile__label
                _submenu-arrow ${cls}`}>
                {label}
            </span>
            </li>
        )
    }

    return (
        <li className='menu-mobile-li'>
            <a className='menu-mobile__link'
               href={url}>
                        <span className='menu-mobile__label'>
                            {label}
                        </span>
            </a>
        </li>
    )

};

export default MobileNavLi;
