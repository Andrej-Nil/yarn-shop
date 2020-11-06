import React, {Component} from "react";
import './mobile-nav-ul.scss'
import MobileNavLi from "../mobile-nav-li";

export default class MobileNavUl extends Component{

    render() {
        const {submenu} = this.props;

        function renderMenu() {
            return submenu.map( (item) => {
                const {label, id} = item;
                return (
                    <MobileNavLi key={id} label={label} item={item} />
                )
            })
        }
        const menuItem = renderMenu();
        return (
            <ul className='mobile-nav-ul'>
                {menuItem}
            </ul>
        )
    }

};


