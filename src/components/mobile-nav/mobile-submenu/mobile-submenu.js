import React from "react";
import './mobile-submenu.scss'
import MobileShops from "../mobile-shops";
import BackBtn from "../../back-btn";
import CloseBtn from "../../close-btn";
import MobileNavUl from "../mobile-nav-ul";

const MobileSubmenu = (props) => {
    const {title, submenu, id, isOpen, back, } = props;
    const  {mobileNavOpen} = props;
    const open = isOpen === id ? '_open-submenu' : '';

    if(submenu === 'catalog') {
        return null
    }

    const ul = submenu === 'addresses' ? <MobileShops/> : <MobileNavUl submenu={submenu} />;
    return (
        <div
            className={`mobile-submenu ${open}`}>
            <BackBtn back={back}/>
            <CloseBtn close={mobileNavOpen}/>
            <h6 className='mobile-submenu__title'>
                {title}
            </h6>
            {ul}
        </div>
    )
};

export default MobileSubmenu;
