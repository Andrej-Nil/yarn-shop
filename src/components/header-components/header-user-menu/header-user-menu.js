import React from "react";
import './header-user-menu.scss'
import Link from "../../link";

const MenuItem = ({icon, content}) => {
    return (
        <React.Fragment>
            <i className={`h-user-menu__icon ${icon}`}/>
            <span className='h-user-menu__content' >
                {content}
            </span>
        </React.Fragment>
    )
};


const contentLogin = (
    <React.Fragment>
       Вход и <br/> регистрация
    </React.Fragment>
);

const userLogin = <MenuItem icon={'_user-icon'} content={contentLogin}/>;

const basket = <MenuItem icon={'_basket-icon'} content={'Корзина'}/>;

const HeaderUserMenu = () => {
    return (
        <div className="header-user-menu h-user-menu">
            <Link
                href={"#!"}
                content={userLogin}
                cls={'h-user-menu-item'}/>

            <Link
                href={"#!"}
                content={basket}
                cls={'h-user-menu-item'}/>
        </div>
    )
};

export default HeaderUserMenu;
