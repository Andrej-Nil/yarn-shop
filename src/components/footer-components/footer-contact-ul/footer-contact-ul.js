import React from "react";
import './footer-contact-ul.scss'

const FooterContactUl = ({arr}) => {

    function renderLi() {
        return arr.map(({title, label, id}) => {
            return (
                <li key={id} className='footer-ul-li'>
                    <span className='footer-ul-li__title'>
                        {title}
                    </span>
                    <span className='footer-ul-li__label'>
                        {label}
                    </span>
                </li>
            )
        })
    }

    const li = renderLi();
    return (
            <ul className="footer-ul">
                {li}
            </ul>
    )
};

export default FooterContactUl;
