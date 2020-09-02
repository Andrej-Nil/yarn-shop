import React from "react";
import './header-top-nav.scss'
import Link from "../link";

const HeaderTopNav = () => {
    const li = [
        {label: 'Оплата', cls: 'ht-nav-li', href: '#!',},
        {label: 'Доставка', cls: 'ht-nav-li', href: '#!',},
        {label: 'Поступление на склад', cls: 'ht-nav-li', href: '#!',},
    ];

    function renderLi() {
        return (
            li.map( (item, idx) => {
                const {label, cls, href} = item;
                return (
                    <li
                        key={'ht-nav-li' + idx}
                        className={cls}>
                        <Link
                            cls={'ht-nav__link'}
                            href={href}
                            content={label}/>
                    </li>
                )
            })
        )
    }

    const liElements = renderLi();
    return (
        <nav className='header-top-nav ht-nav'>
            {liElements}
        </nav>
    )
};

export default HeaderTopNav;
