import React from "react";
import './header-nav.scss'
import Link from "../link";

const navItem =[
    {href: '#!', label: 'Пряжа', id: 0},
    {href: '#!', label: 'Фурнитура', id: 1},
    {href: '#!', label: 'Цены и скидки', id: 2},
    {href: '#!', label: 'Новости', id: 3},
    {href: '#!', label: 'О нас', id: 4},
    {href: '#!', label: 'Помощь', id: 5},
];

const Li = ({li: {href, label}}) => {
    return (
        <li className='header-nav-li'>
            <Link
                href={href}
                cls='header-nav__link'
                content={label}
            />
        </li>
    )
};

function renderLi(){
    return navItem.map( (item) => {
        return(
            <Li
                key={`li${item.id}`}
                li={item}/>
        )
    })
}

const liList = renderLi();

const HeaderNav = () => { 
    return (
        <nav className='header-nav'>
            <ul className='header-nav-ul'>
                {liList}
            </ul>
        </nav>
    )
};

export default HeaderNav;
