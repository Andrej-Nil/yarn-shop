import React from "react";
import './header-user-menu.scss'
import HeaderUserMenuItem from "../heder-user-menu-item";

const menuItem = [
    {href: '#!', icon: '_user-icon', label: 'Вход и регистрация', id: 'user'},
    {href: '#!', icon: '_basket-icon', label: 'Корзина', id: 'basket'},
];

function menuItemRender() {
    return menuItem.map( (item)=>{
        return <HeaderUserMenuItem key={item.id} item={item}/>
    })
}

const item = menuItemRender();

const HeaderUserMenu = () => {
    return (
        <div className="header-user-menu h-user-menu">
            {item}
        </div>
    )
};

export default HeaderUserMenu;
