import React from "react";
import './mobile-nav-ul.scss'

const MobileNavUl = () => {
    const menu = [
        {label: 'Мы находимся', cls: 'item-icon _point', href: null, id: 'menuItem1', submenu: true,},
        {label: 'Каталог', cls: 'item-icon _catalog', href: null, id: 'menuItem2', submenu: true,},
        {label: 'Цены и скидки', cls: null, href: "#!", id: 'menuItem4', submenu: null,},
        {label: 'Оплата', cls: null, href: "#!", id: 'menuItem5', submenu: null,},
        {label: 'Доставка', cls: null, href: "#!", id: 'menuItem6', submenu: null,},
        {label: 'Еще', cls: null, href: null, id: 'menuItem7', submenu: true,},
    ];

    function renderMenu() {
        return menu.map( (item) => {
            const {label, cls, href, submenu, id} = item;
            if(submenu){
                return (
                    <li key={id} className='mobile-nav-li _submenu-arrow'>
                        <span className={`mobile-nav__label  ${cls}`} >{label}</span>
                    </li>
                )
            }
            return (
                <li key={item.id} className={`mobile-nav-li`}>
                    <a className='mobile-nav__label' href={href}>{label}</a>
                </li>
            )


        })
    }
    const menuItem = renderMenu();
    return (
        <ul className='mobile-nav-ul'>
            {menuItem}
        </ul>
    )
};

export default MobileNavUl;
