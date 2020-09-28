import React from "react";
import './header-mobile-bottom.scss'

const HeaderMobileBottom = () => {
    const menuItem = [
        {title: 'ПРЯЖА', href: '№!', icon: '_m-yarn', id: 'yarn'},
        {title: 'СПИЦЫ', href: '№!', icon: '_m-spoke', id: 'spoke'},
        {title: 'КРЮЧКИ', href: '№!', icon: '_m-hook', id: 'hook'},
        {title: 'ФУРНИТУРА', href: '№!', icon: '_m-furniture', id: 'furniture'},
        {title: 'АКЦИИ', href: '№!', icon: '_m-sale', id: 'sale'},
    ];

    function renderShortMenuItem() {
        return menuItem.map((item) => {
            const {title, href, icon, id} = item;
            return (
                <li key={id} className="short-menu-item">
                    <a className='short-menu-link' href={href}>
                        <span className={`short-menu-content ${icon}`}>
                            {title}
                        </span>
                    </a>
                </li>
            )
        })
    }

    const shortMenuItem = renderShortMenuItem();
    return (
        <div className='header-mobile-bottom'>
            <ul className='header-mobile-short-menu'>
                {shortMenuItem}
            </ul>
        </div>
    )
};

export default HeaderMobileBottom;
