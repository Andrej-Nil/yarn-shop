import React from "react";
import './footer-content.scss'
import FooterContact from "../footer-contact";
import FooterNav from "../footer-nav";
import FooterSocial from "../footer-social";



const FooterContent = () => {
    return (
        <div className='footer-content'>
            <div className="footer-content-inner container">
                <FooterNav/>
                <FooterSocial/>
                {<FooterContact/>}
            </div>
        </div>
    )
};

export default FooterContent;
