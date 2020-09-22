import React from "react";
import './footer-social.scss'

const FooterSocial = () => {
    const socials = [
        {href:'#!', cls: '_vk', id: 'vk'},
        {href:'#!', cls: '_telegram', id: 'telegram'},
        {href:'#!', cls: '_instagram', id: 'instagram'},
    ];

    function renderSocialIcon() {
        return socials.map( ({href, cls, id}) => {
            return (
                <div key={id} className="footer-social-item">
                    <a className='footer-social-link' href={href}>
                        <i className={`footer-social__icon ${cls}`}/>
                    </a>
                </div>
            )
        })
    }

    const icons = renderSocialIcon();
    return (
        <div className='footer-social'>
            <h3 className='footer-social__title'>Мы в социальный сетях</h3>
            <div className="footer-social-wrap">
                {icons}
            </div>

        </div>
    )
};

export default FooterSocial;
