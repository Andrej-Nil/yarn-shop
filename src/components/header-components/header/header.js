import React, {Component} from "react";
import './header.scss';
import HeaderTop from "../header-top";
import HeaderCenter from "../header-center";
import HeaderBottom from "../header-bottom";

export default class Header extends Component {
    render() {
        const {searchChange} = this.props;
        return (
            <header className='header'>
                <HeaderTop/>
                <HeaderCenter searchChange={searchChange}/>
                <HeaderBottom/>
            </header>


        )
    }
};
