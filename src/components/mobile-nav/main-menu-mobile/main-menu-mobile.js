import React from "react";
import './main-menu-mobile.scss'
import CloseBtn from "../../close-btn";
import MobileNavLi from "../mobile-nav-li";

const MainMenuMobile = ({isMobileNavOpen, mobileNavOpen, listItem, submenuOpen}) => {
    const cls = isMobileNavOpen ? '_open' : '_close';

    function renderList() {
        return listItem.map( ( item ) => {
            const {label, submenu, id} = item;
           return <MobileNavLi
               key={id}
               item={item}
               submenu={submenu}
               label={label}
               submenuOpen={submenuOpen}/>
        })
    }

    const li = renderList();
    return (
        <div className={`main-menu-mobile ${cls}`}>
            <CloseBtn close={mobileNavOpen}/>
            <ul className="menu-mobile-ul">
                {li}
            </ul>
        </div>
    )
};

export default MainMenuMobile;
