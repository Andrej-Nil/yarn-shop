import React, {Component} from "react";
import HeaderTop from "../header-top";
import HeaderCenter from "../header-center";
import HeaderBottom from "../header-bottom";

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <HeaderTop/>
                <HeaderCenter/>
                <HeaderBottom/>
            </header>


        )
    }
};
