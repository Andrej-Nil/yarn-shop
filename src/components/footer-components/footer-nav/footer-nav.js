import React from "react";
import './footer-nav.scss'
import FooterNavCol from "../footer-nav-col";
import ServerPlug from "../../../server-plug";
const serverPlug = new ServerPlug();
const linkList = serverPlug.linkList;

function renderUl() {
    return linkList.map( (item) => {
        return <FooterNavCol key={item.id} item={item} />
    })
}

const ul = renderUl();

const FooterNav = () => {
    return (
        <nav className='footer-nav'>
            {ul}
        </nav>
    )
};

export default FooterNav;
