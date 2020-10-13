import React from "react";
import './mobile-nav.scss'
import CloseBtn from "../close-btn";
import MobileNavUl from "../mobile-nav-ul";

const MobileNav = ({isOpen, isOpenNav}) => {
    const cls = isOpen ? '_open' : '_close';
    return (
        <nav className={`mobile-nav ${cls}`}>
            <CloseBtn close={isOpenNav}/>

            <MobileNavUl/>
        </nav>
    )
};

export default MobileNav;
