import React from "react";
import './footer-nav-col.scss'
import Link from "../../link";

const FooterNavCol = ({item}) => {
    const {title, links} = item;

    function renderLi() {
        return links.map( ({href, label, id}) => {
            return (
                <li  key={id} className="footer-nav-li">
                    <Link cls='footer-nav-li__link'
                          href={href} content={label} />
                </li>
            )
        })
    }

    const li = renderLi();
    return (
        <div  className='footer-nav-col'>
            <h3 className="footer-nav-col__title">
                {title}
            </h3>
            <ul className="footer-nav-ul">
                {li}
            </ul>
        </div>
    )
};

export default FooterNavCol;
