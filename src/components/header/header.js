import React, {Component} from "react";
import HeaderTop from "../header-top";
import HeaderCenter from "../header-center";

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <HeaderTop/>
                <HeaderCenter/>
            </header>


        )
    }
};
