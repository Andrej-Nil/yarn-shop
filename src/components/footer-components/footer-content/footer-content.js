import React from "react";
import './footer-content.scss'



const FooterContent = ({left, right}) => {
    return (
        <div className='footer-content'>
            <div className="footer-content-inner container">
                {left}
                <div className='vertical-line'/>
                {right}
            </div>
        </div>
    )
};

export default FooterContent;
