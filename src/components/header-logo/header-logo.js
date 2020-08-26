import React from "react";
import './header-logo.scss'
import Logo from "../logo";
import Link from "../link";

const HeaderLogo = () => {
    const logo = <Logo/>;
    const href = '#!';
    return (
        <div className='header-logo'>
            <Link href={href} content={logo}/>
        </div>
    )
};

export default HeaderLogo;
